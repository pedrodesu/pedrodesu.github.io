import { onCleanup, onMount, type Component } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import About from '~/components/sections/About'
import Footer from '~/components/sections/Footer'
import Hero from '~/components/sections/Hero'
import Timeline from '~/components/sections/Timeline'
import Scroller from '~/components/Scroller'
import Menu from '~/components/Menu'
import '~/app.css'

const SectionProvider = clientOnly(async () => ({ default: (await import('~/context/section')).SectionProvider }))

const App: Component = () => {
  onMount(() => {
    function mouseEventPredicate(ev: MouseEvent): void {
      document.body.style.background = `radial-gradient(300px at ${ev.clientX.toString()}px ${ev.clientY.toString()}px, rgb(var(--color-dark)), rgb(var(--color-darker)) 100%)`
    }

    document.body.addEventListener('mousemove', mouseEventPredicate)
    onCleanup(() => {
      document.body.removeEventListener('mousemove', mouseEventPredicate)
    })
  })

  return (
    <SectionProvider>
      <Menu />
      <Scroller />
      <main class="*:snap-start *:h-screen">
        <Hero />
        <About />
        <Timeline />
        <Footer />
      </main>
    </SectionProvider>
  )
}

export default App
