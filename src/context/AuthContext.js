import React, { useEffect, useContext, useState } from 'react';
import { auth, googleAuthProvider } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider(props) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true); 
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setIsAuthenticated(Boolean(currentUser));
			setLoading(false);
		});
		return () => {
			unsubscribe();
			setIsAuthenticated(Boolean(currentUser));
		}
	});

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function signout(){
		return auth.signOut();
	}

	function signin(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	const signInWithGoogle = () => {
        return auth.signInWithPopup(googleAuthProvider);
    }

	const value = {
		currentUser,
		isAuthenticated,
		signup,
		signout,
		signin,
		signInWithGoogle,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && props.children }
		</AuthContext.Provider>
	)
}