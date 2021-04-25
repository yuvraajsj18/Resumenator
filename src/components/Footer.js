import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="print:hidden text-center mt-5 py-3 border-t bg-brand-dark text-white">
            <div className="font-bold">Resumenator &#169; 2021</div>
            <div className="flex justify-between w-2/4 mx-auto mt-1">
                <button className="hover:underline">
                    <Link to="/about">About</Link>
                </button>
                <button className="hover:underline">
                    <Link to="/credits">Credits</Link></button>
                <button className="hover:underline">
                   <a href="https://github.com/yuvraajsj18/Resumenator" target="_blank" rel="noreferrer">Github</a>
                </button>
            </div>
        </footer>
    )
}

export default Footer
