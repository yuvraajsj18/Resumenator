import React, { useEffect, useState } from 'react'
import { useResume } from '../context/ResumeContext';
import Questions from './Questions' 

import PreviousButton from './questions/PreviousButton'
import NextButton from './questions/NextButton'

const CreateResume = () => {
    
    const [quesNo, setQuesNo] = useState(0);
    const no_of_questions = 10;
    const { setTempResumeDetails, tempResumeDetails } = useResume();
    const [isNextDisable, setIsNextDisable] = useState(true);

    useEffect(() => {
        document.title = "Create Resume | Resumenator";
    });

    return (
        <section className="min-h-screen overflow-x-hidden">
            <h1 className="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>

            <Questions quesNo={quesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails} setIsNextDisable={setIsNextDisable}/>
            <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                <PreviousButton isDisable={quesNo === 0} setQuesNo={setQuesNo}/>
                <NextButton isDisable={quesNo === (no_of_questions-1) || isNextDisable} setQuesNo={setQuesNo}/>
            </div>
            
            {   quesNo === (no_of_questions-1) &&
                <div className="mt-8">
                    <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
                </div>
            }
        </section>
    )
}

export default CreateResume;
