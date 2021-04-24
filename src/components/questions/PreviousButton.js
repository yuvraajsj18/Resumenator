import React from 'react'

const PreviousButton = ({ isDisable, handleClick }) => {
    return (
        <button
            disabled={isDisable}
            type="submit"
            onClick={handleClick}
            formNoValidate
            id="previous-button"
            className={`border rounded px-3 py-1 text-white focus:outline-none 
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Previous
        </button>
    )
}


export default PreviousButton
