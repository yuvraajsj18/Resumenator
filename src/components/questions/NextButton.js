import React from 'react'

const NextButton = ({ isDisable }) => {
    return (
        <button
            disabled={isDisable}
            className={`border rounded px-7 py-1 text-white 
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Next
        </button>
    )
}

export default NextButton
