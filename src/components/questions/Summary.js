import React, { useState } from 'react'

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Summary = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [summaryDetails, setSummaryDetails] = useState(tempResumeDetails?.summary ?? "");

    const handleChange = (e) => {
        setSummaryDetails(e.target.value);
    }
    
    const handleNextClick = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, summary: summaryDetails}));
        setQuesNo(prevQuesNo => prevQuesNo + 1);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How can you describe yourself?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleNextClick(e)}>
                <div className="py-3">
                    <textarea name="summary" onChange={handleChange} value={summaryDetails} className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxLength="280" placeholder="Start typing*" required />
                    <div className="text-sm">Max word length is 280 characters.</div>
                </div>
                <div className="flex justify-between mt-5 max-w-xs sm:max-w-sm mx-auto">
                    <PreviousButton setQuesNo={setQuesNo}/>
                    <NextButton />
                </div>
            </form>
        </div>
    )
}

export default Summary
