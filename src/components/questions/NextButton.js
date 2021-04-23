import React from 'react'

const NextButton = ({ isDisable, handleClick}) => {

    return (
        <button
            onClick={handleClick}
            disabled={isDisable}
            type="submit"
            className={`border rounded px-7 py-1 text-white focus:outline-none
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Next
        </button>
    )
}

export default NextButton
