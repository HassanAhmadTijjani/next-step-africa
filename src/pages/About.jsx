import React from 'react'
import IMG from '../assets/img.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Award, BookCheck, Briefcase, Lightbulb, MessageCircle, Target, UserCheck } from 'lucide-react'

const About = () => (
  <>
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Helmet>
        <title>About — NextStep Africa</title>
        <meta
          name="description"
          content="NextStep Africa is a free platform helping African students and professionals find scholarships, fellowships, internships and jobs."
        />
      </Helmet>
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        About Us
      </h3>
      <h1 className="text-4xl font-bold text-blue-600 my-6 mb-20">Discover why NextStep Africa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <p className="text-gray-600 leading-relaxed">
          NextStep Africa is a free opportunity platform dedicated to helping
          African students and young professionals discover life-changing
          opportunities. We curate scholarships, fellowships, internships,
          jobs and important announcements — all in one place.
        </p>
        <img src={IMG} className='max-w-sm rounded' alt="IMG" />
        <Link to='/' className='bg-blue-400 text-white text-center rounded-2xl p-2 max-w-40'> Start your journey</Link>
      </div>
      {/* <p className="text-gray-600 leading-relaxed mb-6">
      Our mission is simple. No one should miss a great opportunity just
      because they did not know it existed. We do the searching so you
      can focus on applying.
    </p>

    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        What We Cover
      </h2>
      <ul className="text-gray-600 space-y-2">
        <li>✅ Scholarships — local and international</li>
        <li>✅ Fellowships — leadership and research programs</li>
        <li>✅ Internships — paid and unpaid opportunities</li>
        <li>✅ Jobs — entry level and graduate roles</li>
        <li>✅ Announcements — important deadlines and updates</li>
      </ul>
    </div> */}
    </div>
    <div className="bg-gray-100 mx-auto px-8 flex p-20 gap-8">
      {/* <h2 className="text-gray-800 font-bold px-8 py-4"> Africa</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 py-8  h-80 rounded border border-gray-400">
          <Target size={60} className='mx-auto' />
          <h2 className="font-bold text-gray-800 mb-6">Mission</h2>
          <p className="text-gray-600 leading-relaxed">Our mission is to connect students and young professionals with life-changing opportunities. We help individuals discover scholarships, internships, and job opportunities that support their growth and career success.</p>
        </div>
        <div className="bg-purple-100 p-4 py-8  h-80 rounded border border-gray-400">
          <Lightbulb size={60} className='mx-auto' />
          <h2 className="font-bold text-gray-800 mb-6">Vission</h2>
          <p className="text-gray-600 leading-relaxed">Our vision is to build a future where every talented student has access to global opportunities regardless of their background or location.</p>
        </div>
        <div className="bg-teal-100 p-4 py-8  h-80 rounded border border-gray-400">
          <Award size={60} className='mx-auto' />
          <h2 className="font-bold text-gray-800 mb-6">Values</h2>
          <p className="text-gray-600 leading-relaxed">We believe in equal opportunity, transparency, and empowerment. Our goal is to create a trusted platform where students can easily access verified opportunities for education and career development.</p>
        </div>
      </div>
    </div>
    <div className="bg-blue-50 ">
      <div className="px-6 pt-20 mx-8 grid grid-cols-1 md:grid-cols-2 border-b">
        <Briefcase size={200} className='text-blue-600 mb-6 hover:border-r' />
        <div className="p-4 mb-6">
          <h1 className="font-bold text-3xl text-gray-800 mb-6">Job Opportunity</h1>
          <p className="text-gray-600 leading-relaxed">We connect students and graduates with job opportunities from trusted companies. Whether you are starting your career or looking for professional growth, we help you find positions that match your skills and ambitions.</p>
        </div>

        {/* 
      */}
      </div>
      <div className="px-6 py-20 mx-8 grid grid-cols-1 md:grid-cols-2 border-b">
        <BookCheck size={200} className='text-blue-600 hover:border-r' />
        <div className="p-4">
          <h1 className="font-bold text-3xl text-gray-800 mb-6">Scholarships</h1>
          <p className="text-gray-600 leading-relaxed">Education should never be limited by financial barriers. We share verified scholarship opportunities from universities and organizations around the world to help students achieve their academic dreams.</p>
        </div>
      </div>
    <div className="px-6 py-20 mx-8 grid grid-cols-1 md:grid-cols-2 border-b">
      <UserCheck size={200} className='text-blue-600' />
      <div className="p-4">
        <h1 className="font-bold text-3xl text-gray-800 mb-6">Internships</h1>
        <p className="text-gray-600 leading-relaxed">Internships help students gain real-world experience. Our platform provides access to internship programs that allow students to develop practical skills and prepare for their future careers.</p>
      </div>
    </div>
    </div>
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Contact Us
      </h2>
      <p className="text-gray-600">
        Have an opportunity you want us to post, or advert? Reach out to us at:
      </p>
      <a
        href="https://wa.me/2348143128855"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium inline-flex items-center gap-2"
      >
        <MessageCircle size={20} />
        Chat on WhatsApp
      </a>
    </div>
  </>
)

export default About