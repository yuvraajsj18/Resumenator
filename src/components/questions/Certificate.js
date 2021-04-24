import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Certificate = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [certificateDetailsList, setCertificateDetailsList] = useState(tempResumeDetails?.certificate ?? []);
    const [certificateDetails, setCertificateDetails] = useState({
                                                    'certificate_title': '',
                                                    'description': '',
                                                });

    const handleChange = (e) => {
        setCertificateDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, certificate: certificateDetailsList}));

        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        for (const key in certificateDetails) {
            if (certificateDetails[key].length === 0) {
                return;
            }
        }

        setCertificateDetailsList(prevList => [...prevList, certificateDetails]);
    };

    const handleDelete = (indexToDelete) => {
        setCertificateDetailsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What certifications do you have?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="certificate_title" onChange={handleChange} value={certificateDetails.certificate_title}  className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Certificate Name" />
                </div>
                <div className="py-3">
                    <textarea name="description" onChange={handleChange} value={certificateDetails.description}  className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxLength="180" placeholder="Description"></textarea>
                    <div className="text-sm">Max word length is 180 characters.</div>
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
                        Click to add Certificate
                    </div>
            </div>

            <div className="mt-5 max-w-xs sm:max-w-lg w-full">
                {
                    certificateDetailsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Certificate</h2>
                }
                <ul>
                    {
                        certificateDetailsList.map((certificate, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4">
                                    <button onClick={() => handleDelete(index)} className="float-right focus:outline-none text-red-600 text-lg"><AiFillDelete /></button>
                                    <h3 className="text-lg">{certificate.certificate_title}</h3>
                                    <p class="break-words">
                                        {certificate.description}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Certificate
