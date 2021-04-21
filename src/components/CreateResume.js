import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CreateResume = () => {
    
    const params = useParams();
    const questions = []

    useEffect(() => {
        document.title = "Create Resume | Resumenator";
    });

    return (
        <section className="min-h-screen overflow-x-hidden">
            <h1 className="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>
    
            <div className="mt-8">
                <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
            </div>
        </section>
    )
}

export default CreateResume;
