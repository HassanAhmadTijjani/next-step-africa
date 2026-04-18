/* eslint-disable no-unused-vars */
// @ts-nocheck

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OpportunityCard from '../components/OpportunityCard'
import supabase from '../supabaseClient'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/SearchBar'


const Home = () => {
  // const oppotunities = [
  //   {
  //     id: 1,
  //     title: "Chevening Scholarship 2025",
  //     category: "Scholarship",
  //     deadline: "2025-11-05",
  //     summary: "The UK government Chevening Scholarship is open to outstanding professionals from Africa. Fully funded masters degree at any UK university.",
  //   },
  //   {
  //     id: 2,
  //     title: "Google Africa Developer Scholarship",
  //     category: "Fellowship",
  //     deadline: "2025-09-30",
  //     summary: "Google is offering scholarships for African developers to grow their technical skills through structured online learning and mentorship.",
  //   },
  //   {
  //     id: 3,
  //     title: "UN Internship Programme",
  //     category: "Internship",
  //     deadline: "2025-08-15",
  //     summary: "The United Nations is accepting applications for internships across multiple departments. Open to final year students and recent graduates.",
  //   },
  // ]
  const [opportunities, setOpportunities] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCat, setSelectedCat] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const isActive = (category) => selectedCat === category ? 'bg-blue-600 text-white p-2 rounded shadow-md' : 'bg-white text-gray-600 border border-gray-300 p-2 rounded'
  // Filtering
  const filteredOpportunities = opportunities.filter((item) => {
    const matchesCategory = selectedCat === 'All' || item.category === selectedCat
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  const latestOpportunities = opportunities.slice(1, 4)
  // Search
  



  useEffect(() => {
    async function fetchOpportunities() {
      const { data, error } = await supabase.from('opportunities').select('*').eq('published', true).order('created_at', { ascending: false })
      if (error) {
        console.log('Error fetching opportunities', error);
      } else {
        setOpportunities(data)
      }
      setLoading(false)
    }
    fetchOpportunities()
  }, [])
  if (loading) {
    return (
      <div className="text-center py-20">
        <Helmet>
          <title>NextStep Africa — Scholarships, Jobs and Opportunities</title>
          <meta
            name="description"
            content="Discover the latest scholarships, fellowships, internships and jobs for African students and professionals. Updated regularly."
          />
        </Helmet>

        <div className="animate-spin rounded-full h-44 w-44 border-b-4 m-auto border-gray-900 "></div>
        <p className="text-gray-500 text-lg">Loading opportunities...</p>
      </div>
    )
  }



  return (

    <div>
      <section className="bg-indigo-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-10 md:mb-6">Find your next big Opportunity</h1>
        <p className="text-lg max-w-xl mx-auto">
          Scholarships, fellowships, internships and jobs —
          all in one place for African students and professionals.
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-6">
        <p>Note: by completing any application you consent and agree to our <Link to='/terms/conditions' className='italic text-blue-400'>Terms and conditions</Link> and <Link to='/privacy/policy' className='itaic text-blue-400'>Privacy policy</Link> </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Latest Opportunities
        </h2>
        {/* Latest Updates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {latestOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} isNew={true} />
          ))}
        </div>
        {/* Filter */}
        <div className=''>
          <select
            name="Category"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4"
          >
            <option value="All">All Categories</option>
            <option value="Scholarship">Scholarships</option>
            <option value="Fellowship">Fellowships</option>
            <option value="Internship">Internships</option>
            <option value="Job">Jobs</option>
          </select>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
        {/* <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F2184567635684637%2F&show_text=true&width=267&t=0" width="267" height="591" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F905488682112715%2F&show_text=true&width=267&t=0" width="267" height="591" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
      </section>
    </div>

  )
}

export default Home