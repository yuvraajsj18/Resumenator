import React, { useRef, useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";

const Education = ({ setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {

    const instituteNameRef = useRef();
    const courseRef = useRef();
    const scoreRef = useRef();
    const graduationMonthRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();

    const [educationDetails, setEducationDetails] = useState([]);

    const handleChange = (e) => {
        if (e.target.value.length === 0) {
            setIsNextDisable(false);
        }
        else {
            setIsNextDisable(true);
        }
    }

    const handlePlusClick = () => {

        console.log(educationDetails);

        setEducationDetails(prevDetails => ([...prevDetails, {
            institute_name: instituteNameRef.current.value, 
            course: courseRef.current.value, 
            score: scoreRef.current.value, 
            graduation_month: graduationMonthRef.current.value, 
            city: cityRef.current.value, 
            country: countryRef.current.value
        }]))

        console.log(educationDetails);

        setTempResumeDetails(prevDetails => ({...prevDetails, education: educationDetails}));

        console.log(educationDetails);

        instituteNameRef.current.value = '';
        courseRef.current.value = '';
        scoreRef.current.value = '';
        graduationMonthRef.current.value = ''; 
        cityRef.current.value = '';
        countryRef.current.value = '';
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">Where did you study?</h2>
            <div className="text-lg max-w-xs sm:max-w-none">
                <div className="py-3">
                    <input onChange={handleChange} ref={instituteNameRef} name="institute_name" className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                </div>
                <div className="py-3">
                    <input onChange={handleChange} ref={courseRef} name="course" className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                </div>
                <div className="py-3">
                    <input onChange={handleChange} ref={scoreRef} name="score" className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                </div>
                <div className="py-3">
                    <label className="text-sm text-gray-800 block">Graduation Month</label>
                    <input onChange={handleChange} ref={graduationMonthRef} name="month" className="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                </div>
                <div className="py-3">
                    <input onChange={handleChange} ref={cityRef} name="city" className="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                    <input onChange={handleChange} ref={countryRef} name="country" className="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                </div>

                <div className="text-center mt-2">
                    <button onClick={handlePlusClick} className="text-brand hover:text-brand-dark text-4xl focus:outline-none">
                        <AiOutlinePlusCircle />
                    </button>
                    <div className="text-sm">
                        Click to add Education
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
