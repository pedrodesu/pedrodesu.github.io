import { IconMenu4 } from '@tabler/icons-solidjs'
import { createMemo, createUniqueId, For, Show, type Component } from 'solid-js'
import * as dialog from '@zag-js/dialog'
import { useSection } from '../hooks/section'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { type Sections } from '../context/section'

const BUTTONS = [['about', 'About me'], ['timeline', 'Timeline'], ['footer', 'Contact']] satisfies [Sections, string][]

const Menu: Component = () => {
  const [state, send] = useMachine(dialog.machine({ id: createUniqueId() }))

  const api = createMemo(() => dialog.connect(state, send, normalizeProps))

  const { to } = useSection()

  return (
    <>
      <button class="fixed right-12 top-8" {...api().getTriggerProps()}>
        <IconMenu4 size={40} stroke-width={1.5} />
      </button>
      <Show when={api().open}>
        <div class="fixed w-full h-full z-10 bg-black/80 backdrop-blur-sm" {...api().getBackdropProps()} />
        <div class="fixed w-full h-full z-10 flex justify-center items-center" {...api().getPositionerProps()}>
          <div {...api().getContentProps()}>
            <button class="absolute right-12 top-8" {...api().getCloseTriggerProps()}>
              <IconMenu4 size={40} stroke-width={1.5} />
            </button>
            <ul class="flex space-y-8 flex-col h-full justify-center items-center font-semibold text-5xl lg:text-7xl">
              <For each={BUTTONS}>
                {
                  ([link, label]) => (
                    <li>
                      <button
                        onClick={() => {
                          to(link)
                          close()
                        }}
                        class="hover:text-indigo-400 transition-colors duration-300"
                      >
                        {label}
                      </button>
                    </li>
                  )
                }
              </For>
            </ul>
          </div>
        </div>
      </Show>
    </>
  )
}

export default Menu
