import React, { useEffect, useState } from 'react'
import { useResume } from '../context/ResumeContext';
import Questions from './Questions' 

import { useHistory } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import PreviousButton from './questions/PreviousButton'
import ResumeCreationIllustration from '../assets/illustrations/resume-creation.svg'

const CreateResume = () => {
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [quesNo, setQuesNo] = useState(0);
    const no_of_questions = 10;
    const { setTempResumeDetails, tempResumeDetails, saveResume } = useResume();
    const history = useHistory();

    useEffect(() => {
        document.title = "Create Resume | Resumenator";
    });

    const handleCreateResume = async () => {
        try {
            setError('');
            setLoading(true);

            await saveResume();
            history.push('/view-resume');
        } catch {
            setLoading(false);
            setError(error.message);
        }
    }

    return (
        <section className="min-h-screen overflow-x-hidden">
            <h1 className="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>
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
            {   quesNo < no_of_questions 
                ?
                <Questions quesNo={quesNo} setQuesNo={setQuesNo} tempResumeDetails={tempResumeDetails} setTempResumeDetails={setTempResumeDetails}/>
                :
                <div className="mt-8 flex flex-col items-center">
                    <button onClick={handleCreateResume} className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">
                        Create Your Resume Now
                    </button>
                    <img className="w-3/5 sm:w-2/6 lg:w-1/4 my-7" src={ResumeCreationIllustration} alt="resume creation illustration"/>
                    <PreviousButton handleClick={() => setQuesNo(prevQuesNo => prevQuesNo - 1)}/>
                </div>
            }
        </section>
    )
}

export default CreateResume;
