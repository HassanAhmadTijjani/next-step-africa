import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './index.css'
// @ts-ignore
import App from './App.jsx'

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    
  </StrictMode>,
)
