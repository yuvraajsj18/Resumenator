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

const Questions = ({ quesNo, setQuesNo, setTempResumeDetails, tempResumeDetails }) => {
    
    const questions = [
        <BasicInfo setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Summary setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Education setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Experience setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Skills setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Project setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Certificate setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Organizations setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Achievements setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>,
        <Socials setQuesNo={setQuesNo} setTempResumeDetails={setTempResumeDetails} tempResumeDetails={tempResumeDetails}/>
    ]

    return questions[quesNo];
}

export default Questions
