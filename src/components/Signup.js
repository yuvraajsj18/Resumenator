import React, { useState, useRef } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import SignupIllustration from '../assets/illustrations/sign-up.svg'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");

        if (passwordRef.current.value.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setError("Confirm password does not match password.");
            return;
        }

        try {
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/setup');
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <section className="mt-5 mx-auto max-w-xs sm:max-w-max min-h-screen">
            {   
                error &&
                <div className="p-2 rounded-md text-center mb-3  bg-red-100 text-red-900">{error}</div>
            }   
            {
                loading &&
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900 flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="animate-spin mx-4"/> Signing You In
                </div>
            }
            <form className="p-2 bg-gray-100 rounded shadow-md" onSubmit={handleSignup}>
                <div className="px-4 py-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input ref={emailRef} name="email" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="email" placeholder="john@example.com" required/>
                </div>

                <div className="px-4 py-2">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input ref={passwordRef} name="password" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="password" placeholder="••••••" required/>
                </div>

                <div className="px-4 py-2">
                    <label htmlFor="confirm_password" className="font-medium">Confirm Password</label>
                    <input ref={confirmPasswordRef} name="confirm_password" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="password" placeholder="••••••" required/>
                </div>

                <button
                 type="submit"
                 disabled={loading}
                 className="mx-auto mb-3 block border px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Create Your Account</button>
            </form>

            <img className="p-4 w-96"
                src={SignupIllustration} 
                alt="Sign-Up Illustration" />
        </section>
    )
}

export default Signup
