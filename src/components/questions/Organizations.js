import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Organizations = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [organizationDetailsList, setOrganizationDetailsList] = useState(tempResumeDetails?.organization ?? []);
    const [organizationDetails, setOrganizationDetails] = useState({
                                                        'organization_name': '',
                                                        'role': '',
                                                        'start_month': '',
                                                        'end_month': '',
                                                        'city': '',
                                                        'country': '',
                                                    });

    const handleChange = (e) => {
        setOrganizationDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }
                                                
    const handleNextClick = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, organization: organizationDetailsList}));
        setQuesNo(prevQuesNo => prevQuesNo + 1);
    };

    const handlePlusClick = () => {
        for (const key in organizationDetails) {
            if (organizationDetails[key].length === 0) {
                return;
            }
        }

        setOrganizationDetailsList(prevList => [...prevList, organizationDetails]);
    };

    const handleDelete = (indexToDelete) => {
        setOrganizationDetailsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are the various organizations have you been in?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleNextClick(e)}>
                <div className="py-3">
                    <input name="organization_name" onChange={handleChange} value={organizationDetails.company_name} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Organization Name" />
                </div>
                <div className="py-3">
                    <input name="role" onChange={handleChange} value={organizationDetails.role} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Role" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Start Month</label>
                    <input name="start_month" onChange={handleChange} value={organizationDetails.start_month} className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">End Month</label>
                    <input name="end_month" onChange={handleChange} value={organizationDetails.end_month} className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input name="city" onChange={handleChange} value={organizationDetails.city} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input name="country" onChange={handleChange} value={organizationDetails.country} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>
    
                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton setQuesNo={setQuesNo}/>
                    <NextButton />
                </div>
            </form>

            <div className="text-center mt-2">
                    <button onClick={handlePlusClick} className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                    <div className="text-sm">
                        Click to add Organization
                    </div>
            </div>

            <div className="mt-5 max-w-xs sm:max-w-lg w-full">
                {
                    organizationDetailsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Organization</h2>
                }
                <ul>
                    {
                        organizationDetailsList.map((organization, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4 flex flex-col">
                                    <button onClick={() => handleDelete(index)} className="self-end text-red-600 text-lg focus:outline-none"><AiFillDelete /></button>
                                    <div className="flex justify-between">
                                        <h3>{organization.organization_name}</h3>
                                    </div>
                                    <div className="text-sm flex justify-between">
                                        <div>
                                            <span>{organization.role}&nbsp;</span> 
                                            <span>{organization.city}, {organization.country}</span>
                                        </div> 
                                        <div>
                                            <span>{organization.start_month}</span>&nbsp;/&nbsp;
                                            <span>{organization.end_month}</span>
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

export default Organizations
