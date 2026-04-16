import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Layout from './components/Layout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsCondition'
import ProtectedRoute from './pages/ProtectedRoute'

// This is a small invisible component that watches the URL. Every time the URL changes — meaning the user navigates to a new page — it sends a pageview event to Google Analytics. This is how Google knows which pages are being visited.
function TrackPages() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
    })
  }, [location])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <TrackPages />
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/opportunity/:id' element={<Layout>< SinglePost /></Layout>} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='admin/dashboard' element={ <ProtectedRoute><AdminDashboard /> </ProtectedRoute>} />
        <Route path='/privacy/policy' element={<Layout> <PrivacyPolicy /> </Layout>} />
        <Route path='/terms/conditions' element={<Layout> <TermsConditions /> </Layout>} />

      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App