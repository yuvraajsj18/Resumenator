import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Signout = () => {
    const { signout } = useAuth();
    const history = useHistory();

    const handleSignOut = async (e) => {
        try {
            await signout();
            history.push('/signin');
        } catch {
            alert("Failed to Sign Out");
        }
    };

    return (
        <div>
            <button 
            onClick={handleSignOut}
            className="mr-2 hover:border-b-2 focus:outline-none">Sign Out</button>
        </div>
    )
}

export default Signout