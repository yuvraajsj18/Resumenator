import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Signout from './Signout'
import { useResume } from '../context/ResumeContext'

const Nav = () => {

    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const { isResumeCreated } = useResume();

    return (
        <nav className="flex justify-between p-3 border-b bg-brand text-white">
            <div className="logo text-lg cursor-pointer">
                {
                    isAuthenticated ?
                        <Link to="/home">RESUME<span className="px-1 bg-white text-brand">NATOR</span></Link>
                    :
                        <Link to="/">RESUME<span className="px-1 bg-white text-brand">NATOR</span></Link>
                }
            </div>
            <div className="flex items-center">
                { !isAuthenticated && <>
                    <button className="mr-2 hover:border-b-2">
                        <Link to="/signin">Sign In</Link>
                    </button>
                    <button className="border px-2 rounded-sm bg-white text-brand hover:bg-gray-200">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </>}

                {
                    isAuthenticated && !['/setup'].includes(location.pathname)&& 
                    <>
                        <button className="mr-2 hover:border-b-2">
                            {
                                isResumeCreated()
                                ?
                                <Link to="/view-resume">Resume</Link>
                                :
                                <Link to="/create-resume">Resume</Link>
                            }
                        </button>
                    </>
                }

                {  isAuthenticated &&
                    <Signout />
                }
            </div>
        </nav>
    )
}

export default Nav
