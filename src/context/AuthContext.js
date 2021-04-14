import React, { useEffect, useContext, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider(props) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true); 

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
		setCurrentUser(user);
		setLoading(false);
	});
		return unsubscribe;
	}, []);

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	const value = {
		currentUser,
		signup,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && props.children }
		</AuthContext.Provider>
	)
}