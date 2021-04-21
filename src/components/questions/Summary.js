import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Summary = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How can you describe yourself?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <textarea className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxLength="280" placeholder="Start typing"></textarea>
                    <div className="text-sm">Max word length is 280 characters.</div>
                </div>

                <div className="flex justify-between mt-5">
                    <PreviousButton />
                    <NextButton />
                </div>
            </div>
        </div>
    )
}

export default Summary
