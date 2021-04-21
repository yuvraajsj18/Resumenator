import React from 'react'

const NextButton = ({ isDisable, setQuesNo }) => {

    return (
        <button
            onClick={() => setQuesNo(quesNo => quesNo + 1)}
            disabled={isDisable}
            className={`border rounded px-7 py-1 text-white focus:outline-none
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Next
        </button>
    )
}

export default NextButton
