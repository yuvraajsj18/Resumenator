import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Project = () => {
    return (
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
                    <PreviousButton />
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Project
