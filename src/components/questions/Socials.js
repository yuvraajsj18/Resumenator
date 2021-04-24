import React, { useState } from 'react'

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Socials = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [socialsDetails, setSocialsDetails] = useState({
                                                        'twitter': tempResumeDetails?.socials?.twitter ?? '',
                                                        'linkedIn': tempResumeDetails?.socials?.linkedIn ?? '',
                                                        'instagram': tempResumeDetails?.socials?.instagram ?? '',
                                                        'personal_website': tempResumeDetails?.socials?.personal_website ?? '',
                                                    });

    const handleChange = (e) => {
        setSocialsDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, socials: socialsDetails}));

        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Enter your social handles</h2>
            <form className="text-lg max-w-xs sm:max-w-xl w-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="personal_website" onChange={handleChange} value={socialsDetails.personal_website} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Personal Website" />
                </div>
                <div className="py-3">
                    <input name="twitter" onChange={handleChange} value={socialsDetails.twitter} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Twitter (only username)" />
                </div>
                <div className="py-3">
                    <input name="linkedIn" onChange={handleChange} value={socialsDetails.linkedIn} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="LinkedIn (only username)" />
                </div>
                <div className="py-3">
                    <input name="instagram" onChange={handleChange} value={socialsDetails.instagram} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Instagram (only username)" />
                </div>
                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton />
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Socials
