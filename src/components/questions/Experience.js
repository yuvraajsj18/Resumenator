import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Experience = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [experienceDetailsList, setExperienceDetailsList] = useState(tempResumeDetails?.experience ?? []);
    const [experienceDetails, setExperienceDetails] = useState({
                                                        'company_name': '',
                                                        'role': '',
                                                        'start_month': '',
                                                        'end_month': '',
                                                        'city': '',
                                                        'country': '',
                                                    });

    const handleChange = (e) => {
        setExperienceDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }
                                                
    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, experience: experienceDetailsList}));
        
        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        for (const key in experienceDetails) {
            if (experienceDetails[key].length === 0) {
                return;
            }
        }

        setExperienceDetailsList(prevList => [...prevList, experienceDetails]);
    };

    const handleDelete = (indexToDelete) => {
        setExperienceDetailsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your most relevant experiences?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="company_name" onChange={handleChange} value={experienceDetails.company_name} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Company Name" />
                </div>
                <div className="py-3">
                    <input name="role" onChange={handleChange} value={experienceDetails.role} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Role" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Start Month</label>
                    <input name="start_month" onChange={handleChange} value={experienceDetails.start_month} className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">End Month</label>
                    <input name="end_month" onChange={handleChange} value={experienceDetails.end_month} className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input name="city" onChange={handleChange} value={experienceDetails.city} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input name="country" onChange={handleChange} value={experienceDetails.country} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
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
                        Click to add Experience
                    </div>
            </div>

            <div className="mt-5 max-w-xs sm:max-w-lg w-full">
                {
                    experienceDetailsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Experience</h2>
                }
                <ul>
                    {
                        experienceDetailsList.map((experience, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4 flex flex-col">
                                    <button onClick={() => handleDelete(index)} className="self-end text-red-600 text-lg focus:outline-none"><AiFillDelete /></button>
                                    <div className="flex justify-between">
                                        <h3>{experience.company_name}</h3>
                                    </div>
                                    <div className="text-sm flex justify-between">
                                        <div>
                                            <span>{experience.role}&nbsp;</span> 
                                            <span>{experience.city}, {experience.country}</span>
                                        </div> 
                                        <div>
                                            <span>{experience.start_month}</span>&nbsp;/&nbsp;
                                            <span>{experience.end_month}</span>
                                        </div>
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

export default Experience
