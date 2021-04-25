import React, { useEffect, useContext, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const ResumeContext = React.createContext();

export function useResume() {
	return useContext(ResumeContext);
}

export function ResumeProvider(props) {

    const [loading, setLoading] = useState(true);
    const [resumeDetails, setResumeDetails] = useState(null);
    const [tempResumeDetails, setTempResumeDetails] = useState({});
    const { currentUser } = useAuth();

	useEffect(() => {
        getResumeDetails();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const getResumeDetails = async () => {
        if (!currentUser) {
            setLoading(false);
            return;
        }

        const resumeDocRef = db.collection("resumes").doc(currentUser.uid);
        try {
            const resumeDoc = await resumeDocRef.get();

            if (resumeDoc.exists) {
                setResumeDetails({id: resumeDoc.id, ...resumeDoc.data()});
                setTempResumeDetails(resumeDoc.data());
            }
        } catch(error) {
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    const saveResume = () => {
        return db.collection('resumes').doc(currentUser.uid).set(tempResumeDetails);     
    }

    const isResumeCreated = () => {
    
        return Boolean(resumeDetails);
    }

	const value = {
		resumeDetails,
        tempResumeDetails,
        setTempResumeDetails,
        saveResume,
        isResumeCreated,
        getResumeDetails
	}

	return (
		<ResumeContext.Provider value={value}>
			{!loading && props.children }
		</ResumeContext.Provider>
	)
}