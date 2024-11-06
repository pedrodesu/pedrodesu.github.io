import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { type Component, Suspense } from 'solid-js'
import '~/app.css'

const App: Component = () => (
  <Router
    root={props => (
      <Suspense>{props.children}</Suspense>
    )}
  >
    <FileRoutes />
  </Router>
)

export default App
