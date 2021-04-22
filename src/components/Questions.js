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

const Questions = ({ quesNo, setTempResumeDetails, setIsNextDisable }) => {
    
    const questions = [
        <BasicInfo setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Summary setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Education setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Experience setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Skills setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Project setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Certificate setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Organizations setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Achievements setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>,
        <Socials setTempResumeDetails={setTempResumeDetails} setIsNextDisable={setIsNextDisable}/>
    ]

    return questions[quesNo];
}

export default Questions
