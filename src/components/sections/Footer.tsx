import { For, type Component } from 'solid-js'
import Section from '../Section'
import { IconArrowRight, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-solidjs'

const EMAIL = 'me.pedro.ferreira@gmail.com'

const MEDIA = [
  [IconBrandLinkedin, 'https://www.linkedin.com/in/pedronmferreira/'],
  [IconBrandGithub, 'https://github.com/pedrodesu']
] satisfies Array<[Component, string]>

const Footer: Component = () => (
  <Section id='footer' class='flex flex-col justify-center space-y-10 lg:space-y-20'>
    <div class='sm:flex lg:block container space-y-10 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-12 xl:space-y-20'>
      <h1 class='text-3xl lg:text-6xl leading-snug uppercase font-bold'>Let's build great things together.</h1>

      <p class='sm:hidden lg:block mt-6 text-zinc-400 text-md lg:text-xl w-3/4'>I'm more active on LinkedIn, but feel free to reach me out in any of the following ways and I'll get back to you as soon as possible.</p>

      <hr class='block sm:hidden lg:block border-dark' />

      <div class='lg:pb-12 flex flex-col sm:justify-center lg:justify-normal lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-20'>
        <a
          class='group flex justify-center items-center space-x-2 bg-indigo-400 hover:bg-gray-200 text-darker rounded-full py-3 lg:px-12 lg:py-5 text-lg lg:text-xl transition-colors duration-300'
          href={`mailto:${EMAIL}`}
        >
          <span>Email me</span>
          <span>
            <IconArrowRight size={20} class='mb-0.5 group-hover:translate-x-1 transition-transform duration-300' />
          </span>
        </a>

        <ul class='flex lg:space-x-8 text-zinc-400'>
          <For each={MEDIA}>
            {([Icon, href]) => (
              <li>
                <a class='inline-block p-4 hover:text-gray-200 transition-colors duration-300' href={href} target='_blank' rel='noreferrer'>
                  <Icon stroke-width={1.75} class='size-6 lg:size-7' />
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
    <div class='container text-zinc-400 text-xl lg:flex lg:items-center whitespace-pre-wrap'>
      <a class='text-gray-200' href='https://github.com/pedrodesu/pedrodesu.github.io' target='_blank' rel='noreferrer'>
        Handcrafted and designed
      </a>
      {' '}with{' '}
      <img
        class='inline h-6'
        src='https://em-content.zobj.net/source/twitter/403/red-heart_2764-fe0f.png'
        alt='❤️'
      />
      {' '}in{' '}
      <img
        class='inline h-6'
        src='https://em-content.zobj.net/source/twitter/403/flag-portugal_1f1f5-1f1f9.png'
        alt='🇵🇹'
      />
      {' '}by Pedro Ferreira.
    </div>
  </Section>
)

export default Footer
