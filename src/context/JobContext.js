import React, { useEffect, useContext, useState } from 'react'
import { db } from '../firebase'
import { useResume } from './ResumeContext'

const JobContext = React.createContext();

export function useJob() {
	return useContext(JobContext);
}

export function JobProvider(props) {

    const [loading, setLoading] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const { resumeDetails } = useResume();

	useEffect(() => {
        const unsubJobSnapshot = getJobsFilteredWithSkills(resumeDetails?.skills ?? null);
        setLoading(false);

        return unsubJobSnapshot;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const getJobsFilteredWithSkills = async (skills) => {   
        if (!skills)
            return;

        const jobsCollectionRef = db.collection("jobs")
                                    .where('skills_required', 'array-contains-any', skills);

        const unsub = await jobsCollectionRef.onSnapshot( snapshot => {
            const jobList = [];

            snapshot.forEach(doc => {
                jobList.push({id: doc.id, ...doc.data()});
            });     
            setFilteredJobs(jobList);
        });

        return unsub;
    }

	const value = {
		filteredJobs,
        getJobsFilteredWithSkills,
	}

	return (
		<JobContext.Provider value={value}>
			{ !loading && props.children }
		</JobContext.Provider>
	)
}