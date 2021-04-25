import React from 'react'
import { Link } from 'react-router-dom'
import { useResume } from '../context/ResumeContext'

import { FiTwitter } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoIosGlobe } from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi'

const ViewResume = () => {

    const { resumeDetails } = useResume();

    const {
            basicInfo,
            summary,
            education,
            experience,
            skills,
            project,
            organization,
            certificate,
            achievements,
            socials,
        } = resumeDetails;

    const handlePrint = () => {
        window.print();
    }

    return (
    <section className="min-h-screen">
      <h1 className="print:hidden text-center text-5xl my-5">
        Resume
      </h1>
      <div className="mx-auto px-3 max-w-4xl border rounded shadow-xl">
        <div className="mx-auto max-w-4xl">
        <header className="px-3 py-5 flex justify-between border-b-2 border-black">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">{basicInfo.first_name} {basicInfo.last_name}<small className="text-lg block">{basicInfo.job_title}</small></h1>
          </div>
          <div>
            <ul className="flex flex-col items-end">
              <li>{basicInfo.email}</li>
              <li>{basicInfo.phone}</li>
              <li>{basicInfo.city}, {basicInfo.country}</li>
            </ul>
          </div>
        </header>

        <main className="">
          <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
            <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg">Summary</h2>
            <div className="px-6 w-4/5 self-end">
              <p className="break-words">{summary}</p>
            </div>
          </div>

          {
              education && 
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Education</h2>
                <div className="px-6 w-4/5 self-end">
                <ul>
                    {
                        education.map((education, index) => (
                            <li key={index} className="mb-2">
                                <div className="flex justify-between">
                                    <h3>{education.institute_name}</h3>
                                    <span className="text-sm">{education.score}</span>
                                </div>
                                <div className="text-sm flex justify-between">
                                    <div>
                                    <span>{education.course}</span>
                                    <span>{education.city}, {education.country}</span>
                                    </div> 
                                    <span>{education.month}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                </div>
             </div>
          }

          {
              experience &&
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Experience</h2>
                <div className="px-6 w-4/5 self-end">
                <ul>
                    {
                        experience.map((experience, index) => (
                            <li key={index} className="mb-2">
                                <div className="flex justify-between">
                                    <h3>{experience.company_name}</h3>
                                </div>
                                <div className="text-sm flex justify-between">
                                    <div>
                                        <span>{experience.role}</span> 
                                        <span>{experience.city}, {experience.country}</span>
                                    </div> 
                                    <div>
                                        <span>{experience.start_month}</span> /
                                        <span>{experience.end_month}</span>
                                    </div>
                                </div>
                            </li>       
                        ))
                    }
                </ul>
                </div>
            </div>
          }

          {
              skills && 
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg">Skills</h2>
                <div className="px-6 w-4/5 self-end">
                <ul className="flex">
                    {
                        skills.map((skill, index) => (
                            <li key={index} className="bg-gray-200 rounded-lg mr-3 px-2 py-1 text-sm">
                                {skill}
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
          }

          {
              project &&
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
              <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Projects</h2>
  
              <div className="px-6 w-4/5 self-end">
                <ul>
                    {
                        project.map((project, index) => (
                          <li key={index} className="mb-2">
                              <h3>{project.project_title}</h3>
                              <p className="text-sm break-words">{project.description}</p>
                          </li>
                        ))
                    }
                </ul>
  
              </div>
            </div>
          }

          {
              certificate &&
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Certifications</h2>
    
                <div className="px-6 w-4/5 self-end">
                    <ul>
                        {
                            certificate.map((certificate, index) => (
                            <li key={index} className="mb-2">
                                <h3>{certificate.certificate_title}</h3>
                                <p className="text-sm break-words">{certificate.description}</p>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
          }

          {
              organization &&
              <div className="mt-5 flex flex-col sm:flex-row justify-between border-b-2 pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Organization</h2>
                <div className="px-6 w-4/5 self-end">
                <ul>
                    {
                        organization.map((organization, index) => (
                            <li key={index} className="mb-2">
                                <div className="flex justify-between">
                                    <h3>{organization.organization_name}</h3>
                                </div>
                                <div className="text-sm flex justify-between">
                                    <div>
                                    <span>{organization.role}</span> 
                                    <span>{organization.city}, {organization.country}</span>
                                    </div> 
                                    <div>
                                    <span>{organization.start_month}</span> /
                                    <span>{organization.end_month}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
          }

          {
              achievements &&
              <div className="mt-5 flex flex-col sm:flex-row justify-between pb-2">
                <h2 className="px-2 sm:w-1/5 w-full font-bold text-lg break-words">Achievements</h2>
                <div className="px-6 w-4/5 self-end">
                    <ul className="list-disc">
                        {
                            achievements.map((achievement, index) => (
                            <li key={index}>
                                {achievement}
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
          }

        </main>

        <footer className="py-3 border-t-2 border-black">
            <div className="flex flex-wrap px-2 justify-between sm:justify-around items-center">
                {
                    socials.personal_website &&
                    <span><IoIosGlobe className="inline text-2xl"/>&nbsp;{socials.personal_website}</span>
                }
                {
                    socials.twitter &&
                    <span><FiTwitter className="inline text-lg text-twitter fill-current"/>&nbsp;@{socials.twitter}</span>
                }
                {
                    socials.linkedIn &&
                    <span><AiFillLinkedin className="inline text-2xl text-linkedIn fill-current" />&nbsp;@{socials.linkedIn}</span>
                }
                {
                    socials.instagram &&
                    <span><FiInstagram className="inline text-2xl text-pink-600" />&nbsp;@{socials.instagram}</span>
                }
            </div>
        </footer>
      </div>
      </div>

      <div className="print:hidden my-5 flex justify-center sm:justify-around flex-wrap">
        <div className="">
        <Link to="edit-resume">
            <button className="bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-36 px-3 py-2 text-lg font-medium focus:outline-none">
            Edit Resume
            </button>
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-36 px-3 py-2 text-lg font-medium focus:outline-none">
          Download
        </button>
        </div>
        {/* <div className="mt-2 sm:mt-0">
        <button className="hover:bg-linkedIn bg-brand text-white rounded shadow-lg border w-36 px-3 py-2 text-lg font-medium focus:outline-none">
          LinkedIn
        </button>
        <button className="hover:bg-twitter bg-brand text-white rounded shadow-lg border w-36 px-3 py-2 text-lg font-medium focus:outline-none">
          Twitter
        </button>
      </div> */}
      </div>
    </section>
    )
}

export default ViewResume
