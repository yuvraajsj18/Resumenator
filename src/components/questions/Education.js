import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Education = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Where did you study?</h2>
            <form className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                </div>
                <div className="py-3">
                    <input className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Graduation Month</label>
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
                    <PreviousButton />
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Education
