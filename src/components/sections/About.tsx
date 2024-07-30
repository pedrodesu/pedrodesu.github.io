import { type Component } from 'solid-js'
import Section from '../Section'
import { IconArrowDownRight } from '@tabler/icons-solidjs'
import { useSection } from '../../hooks/section'

const About: Component = () => {
  const { to, refs: [refs], section: [section] } = useSection()

  return (
    <Section id='about' class='flex items-center'>
      <div class='container space-y-6 lg:space-y-24'>
        <div class='space-y-8 lg:space-y-16'>
          <h4 class='text-2xl uppercase font-bold text-indigo-400'>About me</h4>
          <p class='text-2xl lg:text-3xl leading-snug whitespace-pre-wrap overflow-y-auto h-[50vh] xl:h-auto pr-4 xl:p-0'>
            I'm a passionate programmer with about a decade of free experimentation and software craftsmanship, with a desire to get involved in the industry and to grow both as a person and a problem-solver.
            {'\n\n'}
            With a foundation laid down early by my father, a senior software engineer, I've cultivated resilience and adaptability that empower me to thrive in the ever-evolving tech landscape.
            {'\n\n'}
            I love creating software that works but I also enjoy designing and building beautiful digital experiences. I'm a lover of privacy, freedom and open-source. When I'm not coding I'm probably lifting weights, playing games, reading or hanging out.
          </p>
        </div>
        <div class='float-end'>
          <button
            class='group hover:text-indigo-400 flex items-center space-x-2 lg:space-x-10 transition-colors duration-300'
            onClick={
              () => {
                const keys = [...refs().keys()]
                const nextIndex = keys.indexOf(section())
                const nextSection = keys[nextIndex + 1]

                to(nextSection)
              }
            }
          >
            <span class='text-2xl xl:text-5xl'>My history</span>
            <span class='text-indigo-400 group-hover:rotate-45 transition-transform duration-300'>
              <IconArrowDownRight class='size-8 xl:size-14' />
            </span>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default About
