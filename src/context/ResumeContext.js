import React, { useEffect, useContext, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const ResumeContext = React.createContext();

export function useResume() {
	return useContext(ResumeContext);
}

export function ResumeProvider(props) {

    const [loading, setLoading] = useState(true);
    const [resumeDetails, setResumeDetails] = useState({});
    const [tempResumeDetails, setTempResumeDetails] = useState({});
    const { currentUser } = useAuth();

	useEffect(() => {
        const getResumeDetails = async () => {        
            const resumeDocRef = db.collection("resumes").doc(currentUser.uid);
            try {
                const resumeDoc = await resumeDocRef.get();

                if (resumeDoc.exists) {
                    setResumeDetails({id: resumeDoc.id, ...resumeDoc.data()});
                    console.log(resumeDetails);
                }
            } catch(error) {
                console.log(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        getResumeDetails();
	});

    const saveResume = () => {
        return db.collection('resumes').doc(currentUser.uid).set(tempResumeDetails);     
    }

    const isResumeCreated = () => {
        return !Object.keys(resumeDetails).length === 0 && !resumeDetails.constructor === Object;
    }

	const value = {
		resumeDetails,
        tempResumeDetails,
        setTempResumeDetails,
        saveResume,
        isResumeCreated
	}

	return (
		<ResumeContext.Provider value={value}>
			{!loading && props.children }
		</ResumeContext.Provider>
	)
}