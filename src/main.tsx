import ReactDOM from 'react-dom/client'
import "./styles/main.sass"
import { ContextPagsProvider } from './context/ContextPages'
import {RouterProvider} from "react-router-dom"
import {AppRouter} from "./routes/AppRouter"
import App from './pages/App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextPagsProvider>
      <RouterProvider router={AppRouter}>
          <App/>
      </RouterProvider>
  </ContextPagsProvider>
)
