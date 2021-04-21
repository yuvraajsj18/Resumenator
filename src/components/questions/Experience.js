import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

const Experience = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your most relevant experiences?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
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
                    <button className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Experience
