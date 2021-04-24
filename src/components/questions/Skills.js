import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Skills = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [skillsList, setSkillsList] = useState(tempResumeDetails?.skills ?? []);
    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setSkill(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, skills: skillsList}));

        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        if (skill.length === 0) {
            return;
        }
        
        setSkillsList(prevList => [...prevList, skill]);
    };

    const handleDelete = (indexToDelete) => {
        setSkillsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your stand-out skills?</h2>
            <form className="text-lg max-w-xs sm:max-w-xl w-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="skill" onChange={handleChange} value={skill} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Skills" />
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
                        Click to add Skill
                    </div>
            </div>
            
            <div className="p-6 rounded">
                {
                    skillsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Skill</h2>
                }
                <ul className="flex flex-wrap">
                    {
                        skillsList.map((skill, index) => {
                            return (
                                <li key={index} className="flex items-center bg-gray-200 rounded-lg mr-3 mb-3 px-2 py-1 text-lg">
                                    {skill}&nbsp;&nbsp; 
                                    <button className="text-red-600 focus:outline-none" onClick={() => handleDelete(index)}>
                                        <TiDeleteOutline/>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Skills
