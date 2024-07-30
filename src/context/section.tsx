import { createContext, createSignal, type ParentComponent } from 'solid-js'

export type Sections = 'about' | 'footer' | 'hero' | 'timeline'

export interface ISectionHook {
  refs: [() => Map<Sections, HTMLElement>, (section: Sections, ref: HTMLElement) => void]
  section: [() => Sections, (section: Sections) => void]
  to: (section: Sections) => void
}

export const SectionContext = createContext<ISectionHook>()

export const SectionProvider: ParentComponent = (props) => {
  const [refs, setRefs] = createSignal<Map<Sections, HTMLElement>>(new Map())
  const [section, setSection] = createSignal<Sections>('hero')

  return (
    <SectionContext.Provider value={{
      refs: [refs, (section, ref) => setRefs(refs => new Map([...refs, [section, ref]]))],
      section: [section, setSection],
      to: (section) => refs().get(section)?.scrollIntoView({ behavior: 'smooth' })
    }}
    >
      {props.children}
    </SectionContext.Provider>
  )
}
