import { Mail, MessageCircle } from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
                    <title>About — NextStep Africa</title>
                    <meta
                      name="description"
                      content="NextStep Africa is a free platform helping African students and professionals find scholarships, fellowships, internships and jobs."
                    />
                  </Helmet>
            <header className='px-6 py-6 text-gray-800 '>
                <h1 className='font-bold text-3xl'>Privacy Policy</h1>
                <h2 className='italic '>Last updated: June 2026</h2>
            </header>
            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Introduction</h1>
                <p className="leading-relaxed text-gray-700 ">This Privacy Policy explains how our platform collects, uses, and protects information from visitors and users of the website. We respect your privacy and are committed to protecting any personal information you may provide while using our platform.

                    Our website helps students discover opportunities such as scholarships, internships, jobs, and educational programs.</p>
            </section>
            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Information we collect</h1>
                <p className="leading-relaxed text-gray-700 px-6 py-8">TWe may collect different types of information when you use our website, including:</p>
                <h3>Personal Information</h3>
                <ul>
                    <li>Name</li>
                    <li>We may collect different types of information when you use our website, including:</li>
                </ul>
                <h3>Usage data</h3>
                <ul>
                    <li>pages visited</li>
                    <li>time spent on the site</li>
                    <li>browser type</li>
                </ul>
                <p>This helps us improve the user experience.</p>
            </section>
            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>How we use information</h1>
                <p>The information we collect may be used to:</p>
                <ul>
                    <li>The information we collect may be used to:</li>
                    <li>improve the functionality of our website</li>
                    <li>respond to inquiries or messages</li>
                    <li>respond to inquiries or messages</li>
                </ul>
                <p>We do not sell or share personal information with third parties for marketing purposes.</p>
            </section>
            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Third party Services</h1>
                <p>Our platform may use trusted third-party services to operate and improve our website. These services may collect certain information according to their own privacy policies.</p>
                <ul>
                    <li>Supabase</li>
                    <li>Google Analytics</li>
                </ul>
            </section>
            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Data & Security</h1>
                <p>We take reasonable steps to protect user information and ensure that the data stored on our platform is secure. However, no online platform can guarantee complete security. <br /> Our website may contain links to external websites such as scholarship providers, universities, or job platforms. We are not responsible for the privacy practices or content of these external websites.</p>
                <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page with an updated revision date.</p>
            </section>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-10">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    Contact Us
                </h2>
                <p className="text-gray-600">
                    If you have any questions about this Privacy Policy, please contact us at:                </p>
                <a
                    href="https://wa.me/2348143128855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium inline-flex items-center gap-2"
                >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                </a>
                <a href="mailto:hassanahmadtijjani26@gmail.com" className="bg-gray-500 ml-4 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium inline-flex items-center gap-2"
                    target='_blank' rel='noopener noreferrer'> <Mail size={20} /></a>
            </div>
        </div>
    )
}

export default PrivacyPolicy