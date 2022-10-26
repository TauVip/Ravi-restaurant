import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initialState } from './context/initialState'
import reducer from './context/reducer'
import { StateProvider } from './context/StateProvider'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
)
