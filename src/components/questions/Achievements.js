import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Achievements = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your achievements?</h2>
            <form className="text-lg max-w-xs sm:max-w-xl w-full">
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Achievements" />
                </div>
    
                <div className="p-6 rounded">
                    <ul className="list-disc">
                        <li className="">
                            c++
                        </li>
                        <li className="">
                            python
                        </li>
                    </ul>
                    </div>

                <div className="flex justify-between mt-5">
                    <PreviousButton />
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Achievements
