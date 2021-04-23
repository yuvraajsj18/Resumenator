import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Education = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [educationDetailsList, setEducationDetailsList] = useState([]);
    
    
    const handleChange = (e) => {
        setBasicInfoDetails(prevDetails => [...prevDetails, ])
    }

    const handleNextClick = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, basicInfo: basicInfoDetails}));
        setQuesNo(prevQuesNo => prevQuesNo + 1);
    };
    
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Where did you study?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleNextClick(e)}>
                <div className="py-3">
                    <input name="institute_name" className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                </div>
                <div className="py-3">
                    <input name="course" className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                </div>
                <div className="py-3">
                    <input name="score" className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Graduation Month</label>
                    <input name="month" className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input name="city" className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input name="country" className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>

                <div className="text-center mt-2">
                    <button className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                    <div className="text-sm">
                        Click to add Education
                    </div>
                </div>

                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton isDisable setQuesNo={setQuesNo}/>
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Education
