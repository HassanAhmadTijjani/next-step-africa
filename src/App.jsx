import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Layout from './components/Layout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsCondition'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/opportunity/:id' element={<Layout>< SinglePost /></Layout>} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='admin/dashboard' element={ <ProtectedRoute><AdminDashboard /> </ProtectedRoute>} />
        <Route path='/privacy/policy' element={<Layout> <PrivacyPolicy /> </Layout>} />
        <Route path='/terms/conditions' element={<Layout> <TermsConditions /> </Layout>} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App