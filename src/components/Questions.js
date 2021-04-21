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

const Questions = ({ quesNo, setQuesNo }) => {
    
    const questions = [
        <BasicInfo/>,
        <Summary setQuesNo={setQuesNo}/>,
        <Education setQuesNo={setQuesNo}/>,
        <Experience setQuesNo={setQuesNo}/>,
        <Skills setQuesNo={setQuesNo}/>,
        <Project setQuesNo={setQuesNo}/>,
        <Certificate setQuesNo={setQuesNo}/>,
        <Organizations setQuesNo={setQuesNo}/>,
        <Achievements setQuesNo={setQuesNo}/>
    ]

    return questions[quesNo];
}

export default Questions
