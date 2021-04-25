import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import PreviousButton from './PreviousButton'
import NextButton from './NextButton'

const Project = ({ setQuesNo, tempResumeDetails, setTempResumeDetails }) => {

    const [projectDetailsList, setProjectDetailsList] = useState(tempResumeDetails?.project ?? []);
    const [projectDetails, setProjectDetails] = useState({
                                                    'project_title': '',
                                                    'description': '',
                                                });

    const handleChange = (e) => {
        setProjectDetails(prevDetails => ({...prevDetails, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTempResumeDetails(prevDetails => ({...prevDetails, project: projectDetailsList}));

        if (e.nativeEvent.submitter.id === "next-button") {
            setQuesNo(prevQuesNo => prevQuesNo + 1);
        } else if (e.nativeEvent.submitter.id === "previous-button") {
            setQuesNo(prevQuesNo => prevQuesNo - 1);
        }
    };

    const handlePlusClick = () => {
        for (const key in projectDetails) {
            if (projectDetails[key].length === 0) {
                return;
            }
        }

        setProjectDetailsList(prevList => [...prevList, projectDetails]);
    };

    const handleDelete = (indexToDelete) => {
        setProjectDetailsList(prevList => prevList.filter((value, index) => {
            if (indexToDelete === index)
                return false;
            return true;
        }));
    }
    
    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-3xl my-3 text-center">What have you worked on?</h2>
            <form className="text-lg max-w-xs sm:max-w-none" onSubmit={(e) => handleSubmit(e)}>
                <div className="py-3">
                    <input name="project_title" onChange={handleChange} value={projectDetails.project_title} className="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Project Title" />
                </div>
                <div className="py-3">
                    <textarea name="description" onChange={handleChange} value={projectDetails.description} className="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxLength="220" placeholder="Description"></textarea>
                    <div className="text-sm">Max word length is 220 characters.</div>
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
                        Click to add Project
                    </div>
            </div>

            <div className="mt-5 max-w-xs sm:max-w-lg w-full">
                {
                    projectDetailsList.length !== 0 &&
                    <h2 className="text-3xl text-center my-5">Project</h2>
                }
                <ul>
                    {
                        projectDetailsList.map((project, index) => {
                            return (
                                <li key={index} className="my-4 pr-1 border-r-4">
                                    <button onClick={() => handleDelete(index)} className="float-right focus:outline-none text-red-600 text-lg"><AiFillDelete /></button>
                                    <h3 className="text-lg">{project.project_title}</h3>
                                    <p className="break-words">
                                        {project.description}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Project
