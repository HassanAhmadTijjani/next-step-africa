import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    
    // @ts-ignore
    const linkClass = ({ isActive }) => isActive ? 'text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 bg-blue-900' : 'text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2'
  return (

          <nav className='bg-indigo-700 shadow-md px-6 h-20 flex justify-between items-center sticky top-0 z-50'>
              <Link className='ext-2xl font-bold text-white hover:border-b-2 ' to='/'>Next Step Africa</Link>
              <div className="flex gap-6">
                  <NavLink to="/" className={linkClass}>
                      Home
                  </NavLink>
                  <NavLink to="/about" className={linkClass} >
                      About
                  </NavLink>
              </div>
          </nav>

  )
}

export default Navbar