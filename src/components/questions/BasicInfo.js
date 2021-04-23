import React, { useState } from 'react'

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const BasicInfo = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [basicInfoDetails, setBasicInfoDetails] = useState({
                                                        'first_name': tempResumeDetails?.basicInfo?.first_name ?? '',
                                                        'last_name': tempResumeDetails?.basicInfo?.last_name ?? '',
                                                        'email': tempResumeDetails?.basicInfo?.email ?? '',
                                                        'phone': tempResumeDetails?.basicInfo?.phone ?? '',
                                                        'job_title': tempResumeDetails?.basicInfo?.job_title ?? '',
                                                        'city': tempResumeDetails?.basicInfo?.city ?? '',
                                                        'country': tempResumeDetails?.basicInfo?.country ?? '',
                                                    });

    const handleChange = (e) => {
        setBasicInfoDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    const handleNextClick = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, basicInfo: basicInfoDetails}));
        setQuesNo(prevQuesNo => prevQuesNo + 1);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How Can Recruiters Contact You?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleNextClick(e)}>
                <div className="py-3">
                    <input name="first_name" onChange={handleChange} value={basicInfoDetails.first_name} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="First Name*" required/>
                    <input name="last_name" onChange={handleChange} value={basicInfoDetails.last_name} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Last Name*" required/>
                </div>
                <div className="py-3">
                    <input name="email" onChange={handleChange} value={basicInfoDetails.email} className="w-full border-b-2 focus:border-brand focus:outline-none" type="email" placeholder="Email*" required/>
                </div>
                <div className="py-3">
                    <input name="phone" onChange={handleChange} value={basicInfoDetails.phone} className="w-full border-b-2 focus:border-brand focus:outline-none" type="tel" placeholder="Phone Number*" required/>
                </div>
                <div className="py-3">
                    <input name="job_title" onChange={handleChange} value={basicInfoDetails.job_title} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Job Title*" required/>
                </div>
                <div className="py-3">
                    <input name="city" onChange={handleChange} value={basicInfoDetails.city} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City*" required/>
                    <input name="country" onChange={handleChange} value={basicInfoDetails.country} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country*" required/>
                </div>
                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton isDisable setQuesNo={setQuesNo}/>
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default BasicInfo