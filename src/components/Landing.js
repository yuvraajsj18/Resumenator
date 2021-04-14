import React from 'react'
import { Link } from 'react-router-dom'

import ResumeIllustration from '../assets/illustrations/ResumeIllustration.svg'
import InterviewIllustration from '../assets/illustrations/interview.svg'

const Landing = () => {
    return (
        <>
            <section className="py-5 mb-5 flex flex-col items-center">
                <h1 className="text-4xl font-medium sm:text-5xl text-center mb-4">Are You a Job-Seeker?<br />Create a Professional Resume For Free</h1>
                <img className="w-3/5 sm:w-2/6 lg:w-1/4" src={ResumeIllustration} alt="resume illustration" />
            </section>

            <section className="py-5 my-5 flex flex-col items-center bg-gray-100">
                <h1 className="text-4xl font-medium sm:text-5xl text-center mb-4">
                    Are You a Recruiter?<br />
                    Post Job Offers To Find Skilled People
                </h1>
                <img className="w-3/5 sm:w-2/6 lg:w-1/4" src={InterviewIllustration} alt="Interview illustration" />
            </section>

            <section className="px-12 py-8 rounded-md mx-auto my-5 flex flex-col items-center bg-gray-100 max-w-max">
                <button className="border px-4 py-3 rounded-md bg-brand text-white hover:bg-brand-dark">
                    <Link to="/signup">Create Your Account Now</Link>
                </button>
                <span className="my-2 text-gray-800">Or, Already Have An Account?</span>
                <button className="border-2 px-5 py-2 rounded-md text-brand hover:bg-brand-light hover:text-white">
                    <Link to="/signin">Sign In Now</Link>
                </button>
            </section>
        </>
    )
}

export default Landing
