import React, { useEffect, useState } from 'react'
import Questions from './Questions' 

import PreviousButton from './questions/PreviousButton'
import NextButton from './questions/NextButton'

const CreateResume = () => {
    
    const [quesNo, setQuesNo] = useState(0);

    useEffect(() => {
        document.title = "Create Resume | Resumenator";
        console.log(quesNo)
    });

    return (
        <section className="min-h-screen overflow-x-hidden">
            <h1 className="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>

            <Questions quesNo={quesNo}/>
            <div className="flex justify-between mt-5">
                <PreviousButton isDisable setQuesNo={setQuesNo}/>
                <NextButton setQuesNo={setQuesNo}/>
            </div>

            <div className="mt-8">
                <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
            </div>
        </section>
    )
}

export default CreateResume;
