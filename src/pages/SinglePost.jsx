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
import { AlertTriangle, ArrowLeft, BadgeCent, Home, SearchX } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

function SinglePost() {
  const { id } = useParams()
  const [opportunity, setOpportunity] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedOpportunities, setRelatedOpportunities] = useState([])




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

  // Fetch Related Opportunity
  useEffect(() => {
    async function fetchRelatedOpportunity() {
      if (!opportunity?.category) return // Wait until opportunity is loaded

      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .eq('category', opportunity.category)
        .neq('id', id)
        .limit(3)

      if (error) {
        console.log('Error fetching related opportunities:', error)
      } else {
        setRelatedOpportunities(data)
      }
    }

    fetchRelatedOpportunity()
  }, [opportunity?.category, id])

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
        <SearchX className='text-red-800 mx-auto' size={200} />

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
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Helmet>
        <title>{opportunity.title} — NextStep Africa</title>
        <meta name="description" content={opportunity.summary} />
      </Helmet>
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        <ArrowLeft className='inline-block mr-4 text-blue-400' /> Back to Opportunities
      </Link>
      {/* Headers */}
      <div className="flex  items-center gap-4 mt-4">
        <span className="bg-blue-700 text-white p-2  rounded">
          <h2>{opportunity.category}</h2>
        </span>
        <span className="bg-green-800 p-2 rounded">
          <h2>{opportunity.host_country}</h2>
        </span>
        <span className="bg-yellow-500 p-2 text-white rounded">
          <h2>{opportunity.deadline}</h2>
        </span>
      </div>
      <div className='grid  md:grid-cols-3 gap-4'>
        <div className="bg-white rounded-xl shadow-md p-8 mt-6 w-8xl col-span-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {opportunity.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-4">
            {opportunity.title}
          </h1>

          <p className="text-red-500 text-sm font-medium mb-6">
            Deadline: {opportunity.deadline}
          </p>

          <div className="text-gray-600 mt-20 leading-relaxed mb-8 space-y-4">
            <p className='px-4 py-2 rounded shadow-lg bg-green-500 text-white font-bold'>{opportunity.category} Overview</p>
            {opportunity.summary.split('\n').map((paragraph, index) => (
              paragraph.trim() !== '' && (
                <p key={index}>
                  {paragraph}
                </p>

              )
            ))}
            <div className="flex gap-4 bg-gray-100 p-4 rounded">
              <div className='grid gap-2 border-r px-2'>
                <span><Home size={24} className='inline-block text-blue-400 pr-1' />Host Country: </span>
                <span><BadgeCent size={24} className='inline-block text-green-500 pr-1' /> Coverage: </span>
                <span><AlertTriangle size={24} className='inline-block text-red-400 pr-1' /> Deadline: </span>
              </div>
              <div className="grid gap-2">
                <span>{opportunity.host_country}</span>
                <span>{opportunity.coverage}</span>
                <span>{opportunity.deadline}</span>
              </div>
            </div>
            {/* Bemefits */}
            {opportunity.benefits && (
              <div className="mt-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 bg-blue-600 p-2 rounded text-white font-bold rounded shadow-lg">{opportunity.category} Benefit</h3>
                <ul className="text-gray-600 space-y-2 list-inside">
                  {opportunity.benefits.split('\n').map((benefits, index) => (
                    benefits.trim() !== '' && (<li key={index} className='leading-relaxed before:content-["✓"]  before:mr-3 before:text-blue-500 before:font-bold'>{benefits.trim()}</li>)
                  ))}
                </ul>
              </div>
            )}
            {/* Requirements */}
            {opportunity.requirements && (
              <div className="mt-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 bg-yellow-600 p-2 text-white font-bold rounded shadow-lg">Eligibility Criteria</h3>
                <ul className="text-gray-600 space-y-2 list-inside">
                  {opportunity.requirements.split('\n').map((requirements, index) => (
                    requirements.trim() !== '' && (<li key={index} className='leading-relaxed before:content-["✓"]  before:mr-3 before:text-yellow-500 before:font-bold'>{requirements.trim()}</li>)
                  ))}
                </ul>
              </div>
            )}
            {/* How to apply */}
            {opportunity.how_to_apply && (
              <div className="mt-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  How to Apply
                </h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3 shadow-xl">
                  {opportunity.how_to_apply.split('\n').map((step, index) => (
                    step.trim() !== '' && (
                      <p key={index} className="text-gray-600 leading-relaxed">
                        {step.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href={opportunity.apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Apply Now
          </a>
        </div>
          {/* Related Opportunities */}
          <div className="mt-16 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gray-300 py-6 px-4">Related Opportunities</h2>
            <div className="p-4  ">
              {relatedOpportunities.map((opp) => (
                <div key={opp.id} className="border-b py-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {opp.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">
                    {opp.title}
                  </h3>
                    <Link
                    to={`/opportunity/${opp.id}`}
                      className="text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      View
                    </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default SinglePost