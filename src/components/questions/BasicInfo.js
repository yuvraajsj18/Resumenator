import React, { useRef } from 'react'


const BasicInfo = ({ setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const jobTitleRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();

    const isRequiredInputEmpty = () => {

        return !(
            firstNameRef.current.value &&
            lastNameRef.current.value &&
            emailRef.current.value &&
            phoneRef.current.value &&
            jobTitleRef.current.value &&
            cityRef.current.value &&
            countryRef.current.value
        );
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
            <h2 className="text-3xl my-3 text-center">How Can Recruiters Contact You?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input ref={firstNameRef} name="first_name" value={tempResumeDetails.first_name} onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="First Name*"/>
                    <input ref={lastNameRef} name="last_name" value={tempResumeDetails.last_name} onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Last Name*" />
                </div>
                <div className="py-3">
                    <input ref={emailRef} name="email" value={tempResumeDetails.email} onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="email" placeholder="Email*" />
                </div>
                <div className="py-3">
                    <input ref={phoneRef} name="phone" value={tempResumeDetails.phone} onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="tel" placeholder="Phone Number*" />
                </div>
                <div className="py-3">
                    <input ref={jobTitleRef} name="job_title" value={tempResumeDetails.job_title} onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Job Title*" />
                </div>
                <div className="py-3">
                    <input ref={cityRef} name="city" value={tempResumeDetails.city} onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City*" />
                    <input ref={countryRef} name="country" value={tempResumeDetails.country} onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country*" />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo
