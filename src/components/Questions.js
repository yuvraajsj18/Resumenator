import React from 'react'

import BasicInfo from './questions/BasicInfo'
import Summary from './questions/Summary'
import Education from './questions/Education'
import Experience from './questions/Experience'
import Skills from './questions/Skills'
import Project from './questions/Project'
import Certificate from './questions/Certificate'
import Organizations from './questions/Organizations'
import Achievements from './questions/Achievements'
import Socials from './questions/Socials'

const Questions = ({ quesNo, setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {
    
    const questions = [
        <BasicInfo setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Summary setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Education setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Experience setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Skills setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Project setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Certificate setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Organizations setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Achievements setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Socials setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>
    ]

    return questions[quesNo];
}

export default Questions
