import { Index, type Component } from 'solid-js'
import { useSection } from '../hooks/section'

const Scroller: Component = () => {
  const { to, refs: [refs], section: [section] } = useSection()

  return (
    <nav class='hidden lg:block left-16 top-1/2 -translate-y-1/2 fixed'>
      <ul>
        <Index each={[...refs().keys()]}>
          {
            id => (
              <li>
                <button
                  onClick={() => to(id())}
                  class='p-4'
                >
                  <div class={`border-2 rounded-full ${id() === section() ? 'h-12 w-2 border-gray-200 bg-gray-200' : 'border-zinc-600 size-2 bg-transparent'} transition-all duration-300`} />
                </button>
              </li>
            )
          }
        </Index>
      </ul>
    </nav>
  )
}

export default Scroller
