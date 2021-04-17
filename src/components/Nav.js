import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Signout from './Signout'

const Nav = () => {

    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return (
        <nav className="flex justify-between p-3 border-b bg-brand text-white">
            <div className="logo text-lg cursor-pointer"><Link to="/home">RESUME<span className="px-1 bg-white text-brand">NATOR</span></Link></div>
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
                    isAuthenticated && !['/setup'].includes(location.pathname)&& <>
                        <button class="mr-2 hover:border-b-2">Resume</button>
                        <button class="mr-2 hover:border-b-2">Profile</button> 
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
