import React from 'react'

const PreviousButton = ({ isDisable }) => {
    return (
        <button
            disabled={isDisable}
            className={`border rounded px-3 py-1 text-white 
            ${ isDisable ? "bg-brand-dark" : "bg-brand-light hover:bg-brand-dark"}`}>
            Previous
        </button>
    )
}


export default PreviousButton
