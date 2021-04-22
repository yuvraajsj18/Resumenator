import React, { useRef } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

const Education = ({ setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {

    const instituteNameRef = useRef();
    const courseRef = useRef();
    const scoreRef = useRef();
    const graduationMonth = useRef();
    const cityRef = useRef();
    const countryRef = useRef();

    const isRequiredInputEmpty = () => {

        return !(
            instituteNameRef.current.value &&
            courseRef.current.value &&
            scoreRef.current.value &&
            graduationMonth.current.value &&
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

        resumeDetails = {

        }

        setTempResumeDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Where did you study?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input ref={instituteNameRef} name="institute_name" value={tempResumeDetails.institute_name} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                </div>
                <div className="py-3">
                    <input ref={courseRef} name="course" value={tempResumeDetails.course} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                </div>
                <div className="py-3">
                    <input ref={score} name="score" value={tempResumeDetails.score} className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Graduation Month</label>
                    <input className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>
    
                <div className="text-center mt-2">
                    <button className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Education
