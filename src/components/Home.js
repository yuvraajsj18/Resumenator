import React, { useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useResume } from '../context/ResumeContext'
import { useJob } from '../context/JobContext'

const Home = () => {

    const { currentUser } = useAuth();
    const history = useHistory();
    const { filteredJobs, } = useJob();
    const { isResumeCreated } = useResume();

    useEffect(() => {
        document.title = "Home | Resumenator";

        const isSetupComplete = async () => {        
            const userDocRef = db.collection("users").doc(currentUser.uid);

            try {
                const userDoc = await userDocRef.get();

                if (!userDoc.exists) {
                    history.push("/setup");    
                }

            } catch(error) {
                console.log(error.message);
            }
        }

        isSetupComplete();
    });

    return (<>
        <section className="mt-8">
            <div>
                { 
                    isResumeCreated()
                    ?
                    <Link to="/edit-resume">
                    <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-3 text-lg font-medium focus:outline-none">
                        Edit Resume
                    </button>
                    </Link>
                    :
                    <Link to="/create-resume">
                    <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-3 text-lg font-medium focus:outline-none">
                        Create Resume
                    </button>
                    </Link>
                }
            </div>
        </section>
    
        <section className="min-h-screen">
            <h1 className="mt-8 text-3xl text-center font-medium">Jobs For You</h1>
    
            {
                isResumeCreated()
                ?
                filteredJobs.length > 0 
                ?
                <ul className="flex flex-wrap justify-center">
                    {        
                        filteredJobs.map(job => {

                            return (                        
                                <li className="mx-3" key={job.id}>
                                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                                        <h2 className="text-2xl">{job.title}</h2>
                                        <p className="break-words my-1">
                                            {
                                                job.description.substring(0, 120)
                                                (job.description.length > 120) && '...'
                                            }
                                        </p>
                                        <div className="my-1">Experience: {job.experience_required}</div>
                                        <div className="my-1">
                                            Skills:
                                            {
                                                job.skills_required[0] 
                                                && 
                                                <span className="mx-1 bg-red-200 rounded-full px-2 py-1 text-sm">{job.skills_required[0]}</span>
                                            }
                                            {    
                                                job.skills_required[1] 
                                                && 
                                                <span className="mx-1 bg-green-200 rounded-full px-2 py-1 text-sm">{job.skills_required[1]}</span>
                                            }
                                            {                      
                                                job.skills_required[2] 
                                                && 
                                                <span className="mx-1 bg-blue-200 rounded-full px-2 py-1 text-sm">{job.skills_required[2]}</span>
                                            }
                                        </div>
                                        <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                :                
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900">Oops! No Jobs Found.</div>
                :
                <div>
                    <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900">
                        You have not created a resume yet! 
                        <Link to="/create-resume" className="text-brand-dark ml-1 font-medium underline">
                            Create a resume now.
                        </Link>
                    </div>
                </div>
            }
        </section>
        </>
      )
}

export default Home;
