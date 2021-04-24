import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Achievements = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [achievementsList, setAchievementsList] = useState(tempResumeDetails?.achievements ?? []);
    const [achievement, setAchievement] = useState('');

    const handleChange = (e) => {
        setAchievement(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, achievements: achievementsList}));

        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        if (achievement.length === 0) {
            return;
        }
        
        setAchievementsList(prevList => [...prevList, achievement]);
    };

    const handleDelete = (indexToDelete) => {
        setAchievementsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What are your achievements?</h2>
            <form className="text-lg max-w-xs sm:max-w-xl w-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="achievement" onChange={handleChange} value={achievement} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Achievements" />
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
                    achievementsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Achievement</h2>
                }
                <ul>
                    {
                        achievementsList.map((achievement, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4">
                                    {achievement}&nbsp;&nbsp;
                                    <button onClick={() => handleDelete(index)} className="float-right focus:outline-none text-red-600 text-lg"><AiFillDelete /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Achievements
