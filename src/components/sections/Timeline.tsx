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
    title: 'Software Engineer',
    subtitle: '01Talent',
    fields: [],
    time: ['November 2024'],
    link: 'https://01talent.com/',
    description: 'My first and current job in the industry! 01Talent is a talent management platform that helps companies attract, retain and develop talent. It follows a somewhat similar model to 42 and is majorly staffed by some of its best alumni. I\'m part of the amazing team that manages and develops its common core for students.'
  },
  {
    title: 'bsh',
    fields: ['Haskell'],
    time: ['October 2024'],
    description: 'A POSIX-compliant, minimalistic and performant shell. Work in progress.'
  },
  {
    title: 'Bachelor\'s in Computer Science',
    subtitle: 'Universidade do Minho',
    fields: ['Haskell', 'C'],
    time: ['September 2024'],
    link: 'https://www.uminho.pt/PT',
    description: 'I enrolled in university. Even though I don\'t see formal education as a big necessity, I do believe I could find genuine value and experiences here to grow as a person and as a developer in some areas.'
  },
  {
    title: 'portfolio',
    fields: ['TypeScript', 'Solid.js', 'TailwindCSS'],
    time: ['July 2024'],
    link: 'https://github.com/pedrodesu/pedrodesu.github.io',
    description: 'The website you\'re seeing right now :)'
  },
  {
    title: 'gamin.gg',
    fields: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
    time: ['July 2024'],
    description: 'A conceptual ecommerce web application. Work in progress.'
  },
  {
    title: 'sundae',
    fields: ['Rust', 'LLVM', 'Compiler'],
    time: ['June 2023'],
    link: 'https://github.com/pedrodesu/sundae',
    description: 'A language with a handcrafted compiler.'
  },
  {
    title: 'Student',
    subtitle: '42',
    fields: ['C', 'C++', 'GNU/Linux'],
    time: ['2022', '2024'],
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
    time: ['2022'],
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
                <span class='lg:text-end text-zinc-500 uppercase w-min text-sm font-semibold lg:pt-0.5 pb-1 lg:pb-0'>
                  {e.time[0]}
                  <Show when={e.time[1]}>
                    {t => ` — ${t()}`}
                  </Show>
                </span>
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
