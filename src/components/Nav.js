import React from 'react'
import { useLocation ,Link } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="flex justify-between p-3 border-b bg-brand text-white">
            <div className="logo text-lg cursor-pointer">RESUME<span className="px-1 bg-white text-brand">NATOR</span></div>
            <div className="flex items-center">
                { ['/', '/signup', '/signin'].includes(location.pathname) && <>
                    <button className="mr-2 hover:border-b-2">
                        <Link to="/signin">Sign In</Link>
                    </button>
                    <button className="border px-2 rounded-sm bg-white text-brand hover:bg-gray-200">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </>}

                { ['/setup'].includes(location.pathname) && 
                    <button class="mr-2 hover:border-b-2">Sign Out</button> // Make another component
                }
            </div>
        </nav>
    )
}

export default Nav
