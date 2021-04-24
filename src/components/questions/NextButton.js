import React from 'react'

const NextButton = ({ isDisable}) => {

    return (
        <button
            disabled={isDisable}
            type="submit"
            id="next-button"
            className={`border rounded px-7 py-1 text-white focus:outline-none
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Next
        </button>
    )
}

export default NextButton
