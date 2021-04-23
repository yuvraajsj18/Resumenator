import React, { useEffect, useState } from 'react'
import { useResume } from '../context/ResumeContext';
import Questions from './Questions' 

const CreateResume = () => {
    
    const [quesNo, setQuesNo] = useState(0);
    const no_of_questions = 10;
    const { setTempResumeDetails } = useResume();

    useEffect(() => {
        document.title = "Create Resume | Resumenator";
    });

    return (
        <section className="min-h-screen overflow-x-hidden">
            <h1 className="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>

            <Questions quesNo={quesNo} setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails}/>
            
            {   quesNo === (no_of_questions-1) &&
                <div className="mt-8">
                    <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
                </div>
            }
        </section>
    )
}

export default CreateResume;
