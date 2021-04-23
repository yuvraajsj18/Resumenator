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

const Questions = ({ quesNo, setQuesNo, setTempResumeDetails, setIsNextDisable, tempResumeDetails }) => {
    
    const questions = [
        <BasicInfo setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Summary setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Education setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Experience setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Skills setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Project setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Certificate setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Organizations setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Achievements setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>,
        <Socials setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable} tempResumeDetails={tempResumeDetails}/>
    ]

    return questions[quesNo];
}

export default Questions
