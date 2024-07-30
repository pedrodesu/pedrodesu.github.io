import { For, Show, type Component } from 'solid-js'
import Section from '../Section'
import { IconArrowUpRight } from '@tabler/icons-solidjs'

interface IElement {
  title: string
  subtitle?: string
  fields: string[]
  time: [string] | [string, string]
  link?: string
  description: string
}

const ELEMENTS: IElement[] = [
  {
    title: 'portfolio',
    fields: ['TypeScript', 'Solid.js', 'TailwindCSS'],
    time: ['July', 'August 2024'],
    link: 'https://github.com/pedrodesu/pedrodesu.github.io',
    description: 'The website you\'re seeing right now :)'
  },
  {
    title: 'bsh',
    fields: ['Zig'],
    time: ['2024'],
    description: 'A POSIX-compliant, minimalistic and performant shell. Work in progress.'
  },
  {
    title: 'concept',
    fields: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Redux'],
    time: ['2024'],
    description: 'A conceptual ecommerce web application. Work in progress.'
  },
  {
    title: 'sundae',
    fields: ['Rust', 'LLVM', 'Compiler'],
    time: ['2023'],
    link: 'https://github.com/pedrodesu/sundae',
    description: 'A language with a handcrafted compiler. Work in progress.'
  },
  {
    title: 'Student',
    subtitle: '42',
    fields: ['C', 'C++', 'GNU/Linux'],
    time: ['2022'],
    link: 'https://42.fr/',
    description: 'I saw this as a major opportunity to better link myself with the tech industry, make new like-minded peers and develop soft skills, as well as sharpen my knowledge on C-like programming.'
  },
  {
    title: 'Pisciner',
    subtitle: '42',
    fields: ['Bash', 'C'],
    time: ['July', 'August 2022'],
    link: 'https://42.fr/',
    description: 'A world-renowned, innovative school to learn the fundamentals about and improve on everything regarding technology, specifically software engineering. This was the test period which led me to being admitted into 42 Porto.'
  },
  {
    title: 'yew-feather',
    fields: ['Rust', 'Yew', 'WebAssembly'],
    time: ['2022', '2023'],
    link: 'https://github.com/pedrodesu/yew-feather',
    description: 'Simple wrapper around feather-icons for Yew.'
  }
]

const Timeline: Component = () => (
  <Section id='timeline' class='flex items-center'>
    <div class='container space-y-8 lg:space-y-16'>
      <h4 class='text-2xl uppercase font-bold text-indigo-400'>Timeline</h4>

      <ul class='space-y-16 overflow-y-scroll snap-y snap-mandatory *:snap-start sm:h-[50vh] h-[75vh]'>
        <For each={ELEMENTS}>
          {
            e => (
              <li>
                <span class='lg:text-end text-zinc-500 uppercase w-min text-sm font-semibold lg:pt-0.5 pb-1 lg:pb-0'>{e.time[0]} — {e.time[1] ?? 'Present'}</span>
                <div class='space-y-3 pr-6'>
                  <h4 class='font-semibold'>
                    {
                      (() => {
                        const content = (
                          <Show when={e.subtitle} fallback={e.title}>
                            {s => `${e.title} · ${s()}`}
                          </Show>
                        )

                        return (
                          <Show when={e.link} fallback={content}>
                            {
                              l => (
                                <a
                                  href={l()}
                                  target='_blank'
                                  rel='noreferrer'
                                  class='inline-flex items-center space-x-1 group'
                                >
                                  <span>{content}</span>
                                  <span class='pb-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all'>
                                    <IconArrowUpRight size={16} />
                                  </span>
                                </a>
                              )
                            }
                          </Show>
                        )
                      })()
                    }
                  </h4>
                  <p class='text-zinc-400'>{e.description}</p>
                  <ul class='hidden pt-2 lg:flex space-x-2 font-semibold text-sm text-indigo-400'>
                    <For each={e.fields}>
                      {
                        f => (
                          <li>
                            <span class='inline-block bg-indigo-400/10 px-4 py-2 rounded-full'>{f}</span>
                          </li>
                        )
                      }
                    </For>
                  </ul>
                </div>
              </li>
            )
          }
        </For>
      </ul>
    </div>
  </Section>
)

export default Timeline
