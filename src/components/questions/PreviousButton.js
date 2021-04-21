import React from 'react'

const PreviousButton = ({ isDisable, setQuesNo }) => {
    return (
        <button
            disabled={isDisable}
            onClick={() => setQuesNo(quesNo => quesNo - 1)}
            className={`border rounded px-3 py-1 text-white focus:outline-none 
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Previous
        </button>
    )
}


export default PreviousButton
