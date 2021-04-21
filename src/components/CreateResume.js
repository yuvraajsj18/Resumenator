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
    
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl my-3 text-center">What are your most relevant experiences?</h2>
                <form className="text-lg max-w-xs sm:max-w-none">
                    <div className="py-3">
                        <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Company Name" />
                    </div>
                    <div className="py-3">
                        <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Role" />
                    </div>
                    <div className="py-3">
                        <label className="text-sm text-gray-800 block">Start Month</label>
                        <input className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div className="py-3">
                        <label className="text-sm text-gray-800 block">End Month</label>
                        <input className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div className="py-3">
                        <input className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                        <input className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                    </div>
        
                    <div className="text-center mt-2">
                        <button className="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div className="flex justify-between mt-5">
                        <button className="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button className="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl my-3 text-center">What are your stand-out skills?</h2>
                <form className="text-lg max-w-xs sm:max-w-xl w-full">
                    <div className="py-3">
                        <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Skills" />
                    </div>
        
                    <div className="p-6 rounded">
                        <ul className="flex flex-wrap">
                            <li className="bg-gray-200 rounded-lg mr-3 mb-3 px-2 py-1 text-sm">
                                c++
                            </li>
                            <li className="bg-gray-200 rounded-lg mr-3 mb-3 px-2 py-1 text-sm">
                                python
                            </li>
                        </ul>
                    </div>
        
                    <div className="flex justify-between mt-5">
                        <button className="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button className="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl my-3 text-center">What have you worked on?</h2>
                <form className="text-lg max-w-xs sm:max-w-none">
                    <div className="py-3">
                        <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Project Title" />
                    </div>
                    <div className="py-3">
                        <textarea className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxlength="220" placeholder="Description"></textarea>
                        <div className="text-sm">Max word length is 220 characters.</div>
                    </div>
        
                    <div className="text-center mt-2">
                        <button className="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div className="flex justify-between mt-5">
                        <button className="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button className="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl my-3 text-center">What certifications do you have?</h2>
                <form className="text-lg max-w-xs sm:max-w-none">
                    <div className="py-3">
                        <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Certificate Name" />
                    </div>
                    <div className="py-3">
                        <textarea className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxlength="180" placeholder="Description"></textarea>
                        <div className="text-sm">Max word length is 180 characters.</div>
                    </div>
        
                    <div className="text-center mt-2">
                        <button className="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div className="flex justify-between mt-5">
                        <button className="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button className="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>

    
            <div className="mt-8">
                <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
            </div>
        </section>
    )
}

export default CreateResume;
