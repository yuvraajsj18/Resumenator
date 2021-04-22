import React from 'react'


const BasicInfo = ({ setTempResumeDetails, setIsNextDisable }) => {

    const handleChange = (e) => {
        if (e.target.value.length === 0) {
            setIsNextDisable(true);
            return;
        }

        const newFieldName = e.target.name;

        setTempResumeDetails(prevDetails => ({...prevDetails, newFieldName: e.target.value}));

        setIsNextDisable(false);
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">How Can Recruiters Contact You?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input name="first_name" onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="First Name*" />
                    <input name="last_name" onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Last Name*" />
                </div>
                <div className="py-3">
                    <input name="email" onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="email" placeholder="Email*" />
                </div>
                <div className="py-3">
                    <input name="phone" onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="tel" placeholder="Phone Number*" />
                </div>
                <div className="py-3">
                    <input name="job_title" onChange={handleChange} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Job Title*" />
                </div>
                <div className="py-3">
                    <input name="city" onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City*" />
                    <input name="country" onChange={handleChange} className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country*" />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo
