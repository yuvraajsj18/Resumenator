import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const Setup = () => {
    const { currentUser } = useAuth();

    useEffect(() => {
        console.log(currentUser)
    });

    return (
        <div>
           Hello, World 
        </div>
    )
}

export default Setup