// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.module.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Can not find element with id "root"');
}

createRoot(rootElement).render(
  <BrowserRouter>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode>, */}
  </BrowserRouter>
)
