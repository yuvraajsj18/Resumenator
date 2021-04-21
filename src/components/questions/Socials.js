import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Socials = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Enter your social handles</h2>
            <div className="text-lg max-w-xs sm:max-w-xl w-full">
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Personal Website" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Twitter (only username)" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="LinkedIn (only username)" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Instagram (only username)" />
                </div>

                <div className="flex justify-between mt-5">
                    <PreviousButton />
                    <NextButton isDisable />
                </div>
            </div>
        </div>
    )
}

export default Socials
