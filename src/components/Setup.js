import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import JobSeekerIllustration from '../assets/illustrations/job-seeker-0.jpg'
import JobRecruiterIllustration from '../assets/illustrations/job-recruiter-0.jpg';

const Setup = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        document.title = "Setup | Resumenator";

        const isSetupComplete = async () => {        
            const userDocRef = db.collection("users").doc(currentUser.uid);

            try {
                const userDoc = await userDocRef.get();

                if (userDoc.exists) {
                    history.push("/home");    
                }

            } catch(error) {
                console.log(error.message);
            }
        }

        isSetupComplete();
    });

    const handleJobSeeker = async () => {
        try {
            setError('');
            setLoading(true);

            await db.collection('users').doc(currentUser.uid).set({
               account_type: 'jobSeeker'
            });     

            history.push('/home');
        } catch(error) {
            setLoading(false);
            setError(error.message);
        }
    }

    return (
        <section className="min-h-screen">
            <h1 className="text-4xl text-center my-5 font-medium">Choose Your Role</h1>
            {   
                error &&
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3  bg-red-100 text-red-900">{error}</div>
            }   
            {
                loading &&
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900 flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="animate-spin mx-4"/> Working On It...
                </div>
            }            
            <div className="flex flex-wrap justify-center">
            <div className="m-6 shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                <h2 className="text-2xl">Job Seeker</h2>
                <img className="w-80 h-44 my-2" src={JobSeekerIllustration} alt="job seeker illustration" />
                <button disabled={loading} onClick={handleJobSeeker} className="border-2 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">Select</button>
            </div>
            <div className="m-6 shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                <h2 className="text-2xl">Recruiter</h2>
                <img className="w-80 h-44 my-2" src={JobRecruiterIllustration} alt="job recruiter illustration" />
                <button disabled={loading} onClick={() => setError("Functionality for Recruiter has not been implemented yet.") } className="border-2 px-8 py-1 mb-2 rounded-md text-brand hover:bg-brand hover:text-white font-medium">Select</button>
            </div>
            </div>
        </section>  
    )
}

export default Setup