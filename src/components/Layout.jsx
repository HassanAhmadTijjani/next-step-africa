import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MessageCircle } from 'lucide-react'

// @ts-ignore
const Layout = ({children}) => {
  return (
      <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-1'>
        {children}
        <a
          href="https://wa.me/2348143128855"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full hover:bg-green-600 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50 animate-bounce"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
          </main>
          <Footer />
    </div>
  )
}

export default Layout