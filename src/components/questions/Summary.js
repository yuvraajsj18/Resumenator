import React, { useRef } from 'react'

const Summary = ({ setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {
    const summaryRef = useRef();

    const isRequiredInputEmpty = () => {

        return !summaryRef.current.value;
    }

    const handleChange = (e) => {
        if (isRequiredInputEmpty()) {
            setIsNextDisable(true);
        }
        else {
            setIsNextDisable(false);
        }
        setTempResumeDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How can you describe yourself?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <textarea ref={summaryRef} name="summary" value={tempResumeDetails.summary} className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxLength="280" placeholder="Start typing"></textarea>
                    <div className="text-sm">Max word length is 280 characters.</div>
                </div>
            </div>
        </div>
    )
}

export default Summary
