import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'

const Home = () => {

    const { currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        document.title = "Home | Resumenator";

        const isSetupComplete = async () => {        
            const userDocRef = db.collection("users").doc(currentUser.uid);

            try {
                const userDoc = await userDocRef.get();

                if (!userDoc.exists) {
                    history.push("/setup");    
                }

            } catch(error) {
                console.log(error.message);
            }
        }

        isSetupComplete();
    });

    return (<>
        <section className="mt-8">
            <div>
                <button className="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-3 text-lg font-medium focus:outline-none">Create Resume</button>
            </div>
        </section>
    
        <section className="min-h-screen">
            <h1 className="mt-8 text-3xl text-center font-medium">Jobs For You</h1>
    
            <div>
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900">You have not created a resume yet! <a href="" className="text-brand-dark font-medium underline">Create a resume now.</a></div>
                <div className="mt-4 p-2 max-w-xs sm:max-w-lg mx-auto rounded-md text-center mb-3 bg-blue-100 text-blue-900">Oops! No Jobs Found.</div>
            </div>
    
            <ul className="flex flex-wrap justify-center">
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                    <h2 className="text-2xl">Job Title</h2>
                    <p className="break-words my-1">Job Summary(First 120 Characters)</p>
                    <div className="my-1">Experience: 30 years</div>
                    <div className="my-1">
                        Skills:
                        <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                        <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                        <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                    </div>
                    <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                    <h2 className="text-2xl">Job Title</h2>
                    <p className="break-words my-1">Job Summary(First 120 Characters).</p>
                    <div className="my-1">Experience: 30 years</div>
                    <div className="my-1">
                        Skills:
                        <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                        <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                        <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                    </div>
                    <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                    <h2 className="text-2xl">Job Title</h2>
                    <p className="break-words my-1">Job Summary(First 120 Characters).</p>
                    <div className="my-1">Experience: 30 years</div>
                    <div className="my-1">
                        Skills:
                        <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                        <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                        <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                    </div>
                    <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                        <h2 className="text-2xl">Job Title</h2>
                        <p className="break-words my-1">Job Summary(First 120 Characters).</p>
                        <div className="my-1">Experience: 30 years</div>
                        <div className="my-1">
                            Skills:
                            <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                            <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                            <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                        </div>
                        <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                        <h2 className="text-2xl">Job Title</h2>
                        <p className="break-words my-1">Job Summary(First 120 Characters).</p>
                        <div className="my-1">Experience: 30 years</div>
                        <div className="my-1">
                            Skills:
                            <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                            <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                            <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                        </div>
                        <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
                <li className="mx-3">
                    <div className="m-6 max-w-xs sm:max-w-md sm:w-full shadow-md hover:shadow-lg text-center border rounded-md px-3 py-4">
                        <h2 className="text-2xl">Job Title</h2>
                        <p className="break-words my-1">Job Summary(First 120 Characters).</p>
                        <div className="my-1">Experience: 30 years</div>
                        <div className="my-1">
                            Skills:
                            <span className="bg-red-200 rounded-full px-2 py-1 text-sm">Python</span>
                            <span className="bg-green-200 rounded-full px-2 py-1 text-sm">React</span>
                            <span className="bg-blue-200 rounded-full px-2 py-1 text-sm">JavaScript</span>
                        </div>
                        <button className="border-2 mt-3 px-8 mb-2 py-1 rounded-md text-brand hover:bg-brand hover:text-white font-medium">See More Details</button>
                    </div>
                </li>
            </ul>
        </section>
        </>
      )
}

export default Home;
