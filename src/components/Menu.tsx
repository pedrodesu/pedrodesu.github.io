import { IconMenu4 } from '@tabler/icons-solidjs'
import { For, type Component } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Fragment, Popover, PopoverButton, PopoverPanel } from 'terracotta'
import { useSection } from '../hooks/section'

const BUTTONS = [['about', 'About me'], ['timeline', 'Timeline'], ['footer', 'Contact']] as const

const Menu: Component = () => {
  const { to } = useSection()

  return (
    <Popover defaultOpen={false}>
      {
        ({ close }) => (
          <>
            <PopoverButton class='fixed right-12 top-8 z-10'>
              <IconMenu4 size={40} stroke-width={1.5} />
            </PopoverButton>
            <Portal>
              <PopoverPanel as={Fragment}>
                <div class='fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm'>
                  <ul class='flex space-y-8 flex-col h-full justify-center items-center font-semibold text-5xl lg:text-7xl'>
                    <For each={BUTTONS}>
                      {
                        ([link, label]) => (
                          <li>
                            <button
                              onClick={() => {
                                to(link)
                                close()
                              }}
                              class='hover:text-indigo-400 transition-colors duration-300'
                            >
                              {label}
                            </button>
                          </li>
                        )
                      }
                    </For>
                  </ul>
                </div>
              </PopoverPanel>
            </Portal>
          </>
        )
      }
    </Popover>
  )
}

export default Menu
