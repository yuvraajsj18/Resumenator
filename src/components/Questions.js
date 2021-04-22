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

const Questions = ({ quesNo, setTempResumeDetails }) => {
    
    const questions = [
        <BasicInfo setTempResumeDetails={setTempResumeDetails}/>,
        <Summary setTempResumeDetails={setTempResumeDetails}/>,
        <Education setTempResumeDetails={setTempResumeDetails}/>,
        <Experience setTempResumeDetails={setTempResumeDetails}/>,
        <Skills setTempResumeDetails={setTempResumeDetails}/>,
        <Project setTempResumeDetails={setTempResumeDetails}/>,
        <Certificate setTempResumeDetails={setTempResumeDetails}/>,
        <Organizations setTempResumeDetails={setTempResumeDetails}/>,
        <Achievements setTempResumeDetails={setTempResumeDetails}/>,
        <Socials setTempResumeDetails={setTempResumeDetails}/>
    ]

    return questions[quesNo];
}

export default Questions
