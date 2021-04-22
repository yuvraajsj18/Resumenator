import React, { useRef } from 'react'

const Socials = ({ setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {
    
    const personalWebRef = useRef()
    const twitterRef = useRef()
    const instagramRef = useRef()
    const linkedInRef = useRef()

    const isRequiredInputEmpty = () => {
        
        return !(
            personalWebRef.current.value &&
            twitterRef.current.value &&
            instagramRef.current.value &&
            linkedInRef.current.value
        );
    }

    const handleChange = (e) => {
        if (isRequiredInputEmpty()) {
            setIsNextDisable(true);
        }
        else {
            setIsNextDisable(false);
        }
        setTempResumeDetails(prevDetails);
    }
    
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Enter your social handles</h2>
            <div className="text-lg max-w-xs sm:max-w-xl w-full">
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Personal Website" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Twitter (only username)" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="LinkedIn (only username)" />
                </div>
                <div className="py-3">
                    <input className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Instagram (only username)" />
                </div>
            </div>
        </div>
    )
}

export default Socials
