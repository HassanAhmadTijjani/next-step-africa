import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
import './index.css'
// @ts-ignore
import App from './App.jsx'
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>,
)
