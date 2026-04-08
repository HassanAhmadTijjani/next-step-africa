import { Mail, MessageCircle } from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const TermsConditions = () => {
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
                <h1 className='font-bold text-3xl'>Terms & Conditions</h1>
                <h2 className='italic '>Last updated: June 2026</h2>
            </header>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Introduction</h1>
                <p className="leading-relaxed text-gray-700 ">
                    These Terms and Conditions govern the use of our platform. By accessing or using this website,
                    you agree to follow the terms outlined on this page. If you do not agree with any part of these
                    terms, you should not use this platform.
                </p>
                <p className="leading-relaxed text-gray-700 mt-2">
                    Our platform is designed to help students and professionals discover opportunities such as
                    scholarships, internships, jobs, and educational programs.
                </p>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Use of the Platform</h1>
                <p className="leading-relaxed text-gray-700 px-6 py-8">
                    By using this website, you agree to use the platform responsibly and only for lawful purposes.
                </p>
                <ul>
                    <li>Users must not attempt to damage or disrupt the website.</li>
                    <li>Users must not post or submit false or misleading information.</li>
                    <li>Users must not attempt unauthorized access to any part of the system.</li>
                    <li>The platform should only be used for legitimate educational and professional purposes.</li>
                </ul>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Opportunities and Information</h1>
                <p className="leading-relaxed text-gray-700">
                    Our platform shares information about scholarships, internships, jobs, and other opportunities
                    provided by external organizations.
                </p>
                <p className="leading-relaxed text-gray-700 mt-2">
                    While we try to ensure the accuracy of the information published on the platform, we cannot
                    guarantee that all listings are always complete, accurate, or up to date. Users are encouraged
                    to verify details directly with the official organization before applying.
                </p>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Third Party Links</h1>
                <p className="leading-relaxed text-gray-700">
                    Our website may contain links to third-party websites such as universities, companies,
                    scholarship providers, or job platforms.
                </p>
                <p className="leading-relaxed text-gray-700 mt-2">
                    We do not control these websites and are not responsible for their content, services,
                    or privacy practices.
                </p>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Account Responsibility</h1>
                <p className="leading-relaxed text-gray-700">
                    If users create accounts on this platform, they are responsible for maintaining the
                    confidentiality of their login information.
                </p>
                <ul>
                    <li>Users should keep their passwords secure.</li>
                    <li>Users should notify us if they suspect unauthorized access to their account.</li>
                </ul>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Limitation of Liability</h1>
                <p className="leading-relaxed text-gray-700">
                    This platform is provided for informational purposes only. We are not responsible for
                    any loss, damage, or issues that may arise from the use of opportunities listed on the site.
                </p>
                <p className="leading-relaxed text-gray-700 mt-2">
                    Users are responsible for verifying opportunity details before making any decisions
                    related to applications or participation.
                </p>
            </section>

            <section className="my-6 px-6">
                <h1 className='font-bold text-3xl'>Changes to These Terms</h1>
                <p className="leading-relaxed text-gray-700">
                    We may update these Terms and Conditions from time to time. Any updates will be posted
                    on this page with a revised "Last updated" date.
                </p>
            </section>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-10">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    Contact Us
                </h2>
                <p className="text-gray-600">
                    If you have any questions about these Terms and Conditions, please contact us:
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

                <a
                    href="mailto:hassanahmadtijjani26@gmail.com"
                    className="bg-gray-500 ml-4 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-medium inline-flex items-center gap-2"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Mail size={20} />
                </a>
            </div>
        </div>
    )
}

export default TermsConditions