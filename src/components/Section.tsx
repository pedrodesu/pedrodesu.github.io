import { onMount, type ParentComponent } from 'solid-js'
import { useSection } from '../hooks/section'
import { type Sections } from '../context/section'

interface ISectionProps {
  class?: string
  id: Sections
}

const Section: ParentComponent<ISectionProps> = (props) => {
  const { section: [, setSection], refs: [, addRef] } = useSection()

  let section!: HTMLElement

  onMount(() => {
    addRef(props.id, section) // TODO could go before onMount?

    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSection(props.id)
      }
    }, {
      root: null,
      threshold: 0.1
    }).observe(section)
  })

  return (
    <section ref={section} class={props.class ?? ''}>
      {props.children}
    </section>
  )
}

export default Section
