import React, { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import ForgetPasswordIllustration from '../assets/illustrations/forget-password.svg';

const ResetPassword = () => {

    const emailRef = useRef();

    const { resetPassword } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await resetPassword(emailRef.current.value);
        }
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <section className="mt-5 mx-auto max-w-xs sm:max-w-max min-h-screen">
            {   
                error &&
                <div className="p-2 rounded-md text-center mb-3  bg-red-100 text-red-900">{error}</div>
            }   
            {
                loading &&
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900">Password reset link has been sent to your email.</div>
            }
            <form className="p-2 bg-gray-100 rounded shadow-md" onSubmit={handleResetPassword}>
                <div className="px-4 py-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input ref={emailRef} name="email" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="email" placeholder="john@example.com" required />
                </div>
                
                <button disabled={loading} className="mt-3 mx-auto mb-3 block border px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Reset Password</button>
            
            </form>

            <img className="p-4 w-96"
                src={ForgetPasswordIllustration} 
                alt="Forget Password Illustration" />
        </section>
    )
}

export default ResetPassword
