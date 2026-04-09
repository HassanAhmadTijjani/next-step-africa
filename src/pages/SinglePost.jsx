// @ts-nocheck


// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { ArrowLeft, ArrowRight, SearchX } from 'lucide-react'

// const opportunities = [
//   {
//     id: 1,
//     title: "Chevening Scholarship 2025",
//     category: "Scholarship",
//     deadline: "2025-11-05",
//     summary: "The UK government Chevening Scholarship is open to outstanding professionals from Africa. Fully funded masters degree at any UK university.",
//     applyLink: "https://www.chevening.org",
//   },
//   {
//     id: 2,
//     title: "Google Africa Developer Scholarship",
//     category: "Fellowship",
//     deadline: "2025-09-30",
//     summary: "Google is offering scholarships for African developers to grow their technical skills through structured online learning and mentorship.",
//     applyLink: "https://developers.google.com",
//   },
//   {
//     id: 3,
//     title: "UN Internship Programme",
//     category: "Internship",
//     deadline: "2025-08-15",
//     summary: "The United Nations is accepting applications for internships across multiple departments. Open to final year students and recent graduates.",
//     applyLink: "https://www.un.org",
//   },
// ]
// const SinglePost = () => {
//   const {id} = useParams()
//   const opportunity = opportunities.find((item) => item.id === Number(id))
//   if (!opportunity) {
//     return (
//       <div className="text-center py-20">
//         <SearchX className='text-red-800 mx-auto' size={200}/>
//         <h1 className="text-2xl font-bold text-red-500 block mt-10">Opportunity not found</h1>
//         <Link to='/' className="bg-blue-400 text-white py-2 px-4 rounded shadow-md hover:underline mt-4 inline-block"><ArrowLeft className='inline-block mr-4'/>Go back home</Link>

//       </div>
//     )
//   }
//   return (
//     <div className='max-w-3xl mxx-auto px-4 py-6'>
//       <Link to='/' className="text-blue-400 hover:shadow-md hover:underline mt-4 inline-block p-2"><ArrowLeft className='inline-block mr-4' />Back to opportunities</Link>
//       <div className="bg-white rounded-xxl shadow-md p-8 mt-6">
//         <span className="text-xs font-semibold tracking-wide text-blue-400 uppercase">{ opportunity.category }</span>
//         <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-4">
//           {opportunity.title}
//         </h1>

//         <p className="text-red-500 text-sm font-medium mb-6">
//           Deadline: {opportunity.deadline}
//         </p>

//         <p className="text-gray-600 leading-relaxed mb-8">
//           {opportunity.summary}
//         </p>
//         <a href={opportunity.applyLink} target='_blank' rel='noopener noreferrer' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium'>Apply now <ArrowRight className='ml-4 inline-block'/></a>
//       </div>

//     </div>
//   )
// }

// export default SinglePost



import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import supabase from '../supabaseClient'
import { ArrowLeft, SearchX } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

function SinglePost() {
  const { id } = useParams()
  const [opportunity, setOpportunity] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchOpportunity() {
      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.log('Error fetching opportunity:', error)
      } else {
        setOpportunity(data)
      }
      setLoading(false)
    }

    fetchOpportunity()
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-24 w-24 border-b-4 m-auto border-gray-900 "></div>

        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    )
  }

  if (!opportunity) {
    return (
      <div className="text-center py-20">
          <SearchX className='text-red-800 mx-auto' size={200}/>

        <h2 className="text-2xl font-bold text-gray-700">
          Opportunity not found
        </h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          <ArrowLeft className='inline-block mr-4 text-blue-400' />   Go back home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Helmet>
        <title>{opportunity.title} — NextStep Africa</title>
        <meta name="description" content={opportunity.summary} />
      </Helmet>
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        <ArrowLeft className='inline-block mr-4 text-blue-400' /> Back to Opportunities
      </Link>

      <div className="bg-white rounded-xl shadow-md p-8 mt-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {opportunity.category}
        </span>

        <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-4">
          {opportunity.title}
        </h1>

        <p className="text-red-500 text-sm font-medium mb-6">
          Deadline: {opportunity.deadline}
        </p>

        <div className="text-gray-600  leading-relaxed mb-8 space-y-4">
          {opportunity.summary.split('\n').map((paragraph, index) => (
            paragraph.trim() !== '' && (
              <p key={index}>
                {paragraph}
              </p>
            )
          ))}
        </div>


       <a  href={opportunity.apply_link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
        >
        Apply Now
      </a>
    </div>
    </div >
  )
}

export default SinglePost