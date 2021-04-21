import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const BasicInfo = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How Can Recruiters Contact You?</h2>
            <form className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="First Name" />
                    <input className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Last Name" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="email" placeholder="Email" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="tel" placeholder="Phone Number" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Job Title" />
                </div>
                <div className="py-3">
                    <input className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>

                <div className="flex justify-between mt-5">
                    <PreviousButton isDisable />
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default BasicInfo
