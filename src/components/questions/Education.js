import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Education = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [educationDetailsList, setEducationDetailsList] = useState(tempResumeDetails?.education ?? []);
    const [educationDetails, setEducationDetails] = useState({
                                                        'institute_name': '',
                                                        'course': '',
                                                        'score': '',
                                                        'month': '',
                                                        'city': '',
                                                        'country': '',
                                                    });
    
    const handleChange = (e) => {
        setEducationDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, education: educationDetailsList}));
        
        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        for (const key in educationDetails) {
            if (educationDetails[key].length === 0) {
                return;
            }
        }

        setEducationDetailsList(prevList => [...prevList, educationDetails]);
    };

    const handleDelete = (indexToDelete) => {
        setEducationDetailsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }
    
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Where did you study?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="institute_name" onChange={handleChange} value={educationDetails.institute_name} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                </div>
                <div className="py-3">
                    <input name="course"  onChange={handleChange} value={educationDetails.course} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                </div>
                <div className="py-3">
                    <input name="score" onChange={handleChange} value={educationDetails.score} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Graduation Month</label>
                    <input name="month" onChange={handleChange} value={educationDetails.month} className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input name="city" onChange={handleChange} value={educationDetails.city} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input name="country" onChange={handleChange} value={educationDetails.country} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>

                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton/>
                    <NextButton />
                </div>
            </form>

            <div className="text-center mt-2">
                    <button onClick={handlePlusClick} className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                    <div className="text-sm">
                        Click to add Education
                    </div>
            </div>

            <div className="mt-5 max-w-xs sm:max-w-lg w-full">
                {
                    educationDetailsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Education</h2>
                }
                <ul>
                    {
                        educationDetailsList.map((education, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4 flex flex-col">
                                    <button onClick={() => handleDelete(index)} className="self-end text-red-600 text-lg focus:outline-none"><AiFillDelete /></button>
                                    <div className="flex justify-between">
                                        <h3 className="text-lg">{education.institute_name}</h3>
                                        <span className="">{education.score}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <span>{education.course}&nbsp;</span>
                                            <span>{education.city}, {education.country}</span>
                                        </div> 
                                        <span>{education.month}</span>
                                    </div>
                              </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Education
