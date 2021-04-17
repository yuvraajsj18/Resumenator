import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import GoogleSignInButton from 'react-google-button';
import SignInIllustration from '../assets/illustrations/sign-in.svg'

const Signin = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const { isAuthenticated, signin, signInWithGoogle } = useAuth();

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/home');
        }

        document.title = "Sign In | Resumenator";
    });

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push('/home');
        } catch(error) {
            setLoading(false);
            setError(error.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
        setError("");

        try {
            setLoading(true);
            await signInWithGoogle();
            history.push('/home');
        } catch (error) {
            setLoading(false);
            setError(error.message);
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
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900 flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="animate-spin mx-4"/> Signing You In
                </div>
            }            
            <GoogleSignInButton type="light"
                className="my-4 mx-auto"
                onClick={handleGoogleSignIn}
                disabled={loading}
            />
            <form className="p-2 bg-gray-100 rounded shadow-md" onSubmit={handleSignIn}>
                <div className="px-4 py-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input required ref={emailRef} name="email" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="email" placeholder="john@example.com" />
                </div>
                <div className="px-4 py-2">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input required ref={passwordRef} name="password" className="w-full p-2 border-2 rounded focus:outline-none focus:border-gray-400" type="password" placeholder="••••••" />
                </div>
                
                <button
                    type="submit"
                    disabled={loading}
                    className="mx-auto mb-3 block border px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Sign In Now</button>
                <Link className="block text-center text-sm underline" to="/reset-password">forget password? <span className="text-brand">Help</span></Link>
            </form>
  
            <img className="p-4 w-96"
                src={SignInIllustration} 
                alt="Sign-In Illustration" />
      </section>  
    )
}

export default Signin
