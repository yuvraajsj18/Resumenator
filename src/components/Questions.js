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

const Questions = ({ quesNo }) => {
    
    const questions = [
        <BasicInfo/>,
        <Summary/>,
        <Education/>,
        <Experience/>,
        <Skills/>,
        <Project/>,
        <Certificate/>,
        <Organizations/>,
        <Achievements/>,
        <Socials/>
    ]

    return questions[quesNo];
}

export default Questions
