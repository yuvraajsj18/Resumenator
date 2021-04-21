import React from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Skills = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your stand-out skills?</h2>
            <div className="text-lg max-w-xs sm:max-w-xl w-full">
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
                    <PreviousButton />
                    <NextButton />
                </div>
            </div>
        </div>
    )
}

export default Skills
