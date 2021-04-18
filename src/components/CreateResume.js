import React from 'react'

const CreateResume = () => {
    return (
        <section class="min-h-screen overflow-x-hidden">
            <h1 class="text-5xl sm:text-6xl text-center mt-5">My Resume</h1>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">How Can Recruiters Contact You?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="First Name" />
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Last Name" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="email" placeholder="Email" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="tel" placeholder="Phone Number" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Job Title" />
                    </div>
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button disabled class="border rounded px-3 py-1 text-white bg-brand-dark">Previous</button>
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">How can you describe yourself?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <textarea class="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxlength="280" placeholder="Start typing"></textarea>
                        <div class="text-sm">Max word length is 280 characters.</div>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">Where did you study?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Institute Name" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Course" />
                    </div>
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full" type="text" placeholder="Grade/CGPA/Percentage" />
                    </div>
                    <div class="py-3">
                        <label class="text-sm text-gray-800 block">Graduation Month</label>
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                    </div>
        
                    <div class="text-center mt-2">
                        <button class="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What are your most relevant experiences?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Company Name" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Role" />
                    </div>
                    <div class="py-3">
                        <label class="text-sm text-gray-800 block">Start Month</label>
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div class="py-3">
                        <label class="text-sm text-gray-800 block">End Month</label>
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                    </div>
        
                    <div class="text-center mt-2">
                        <button class="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What are your stand-out skills?</h2>
                <form class="text-lg max-w-xs sm:max-w-xl w-full">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Skills" />
                    </div>
        
                    <div class="p-6 rounded">
                        <ul class="flex flex-wrap">
                            <li class="bg-gray-200 rounded-lg mr-3 mb-3 px-2 py-1 text-sm">
                                c++
                            </li>
                            <li class="bg-gray-200 rounded-lg mr-3 mb-3 px-2 py-1 text-sm">
                                python
                            </li>
                        </ul>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What have you worked on?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Project Title" />
                    </div>
                    <div class="py-3">
                        <textarea class="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxlength="220" placeholder="Description"></textarea>
                        <div class="text-sm">Max word length is 220 characters.</div>
                    </div>
        
                    <div class="text-center mt-2">
                        <button class="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What certifications do you have?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Certificate Name" />
                    </div>
                    <div class="py-3">
                        <textarea class="w-full border-b-2 focus:border-brand focus:outline-none" cols="50" rows="6" maxlength="180" placeholder="Description"></textarea>
                        <div class="text-sm">Max word length is 180 characters.</div>
                    </div>
        
                    <div class="text-center mt-2">
                        <button class="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What are the various organizations have you been in?</h2>
                <form class="text-lg max-w-xs sm:max-w-none">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Organization Name" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Role" />
                    </div>
                    <div class="py-3">
                        <label class="text-sm text-gray-800 block">Start Month</label>
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div class="py-3">
                        <label class="text-sm text-gray-800 block">End Month</label>
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full" type="month" />
                    </div>
                    <div class="py-3">
                        <input class="border-b-2 focus:border-brand focus:outline-none mr-8 w-full sm:w-auto mb-3 sm:mb-0" type="text" placeholder="City" />
                        <input class="border-b-2 focus:border-brand focus:outline-none w-full sm:w-auto" type="text" placeholder="Country" />
                    </div>
        
                    <div class="text-center mt-2">
                        <button class="border rounded-full text-brand-dark w-8 text-2xl border-brand">+</button>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">What are your achievements?</h2>
                <form class="text-lg max-w-xs sm:max-w-xl w-full">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Achievements" />
                    </div>
        
                    <div class="p-6 rounded">
                        <ul class="list-disc">
                            <li class="">
                                c++
                            </li>
                            <li class="">
                                python
                            </li>
                        </ul>
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button class="border rounded px-7 py-1 bg-brand-light text-white hover:bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="flex flex-col items-center mt-8">
                <h2 class="text-3xl my-3 text-center">Enter your social handles</h2>
                <form class="text-lg max-w-xs sm:max-w-xl w-full">
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Personal Website" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Twitter (only username)" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="LinkedIn (only username)" />
                    </div>
                    <div class="py-3">
                        <input class="w-full border-b-2 focus:border-brand focus:outline-none" type="text" placeholder="Instagram (only username)" />
                    </div>
        
                    <div class="flex justify-between mt-5">
                        <button class="border rounded px-3 py-1 bg-brand-light text-white hover:bg-brand-dark">Previous</button>            
                        <button disabled class="border rounded px-7 py-1 text-white bg-brand-dark">Next</button>
                    </div>
                </form>
            </div>
    
            <div class="mt-8">
                <button class="block mx-auto bg-brand hover:bg-brand-dark text-white rounded shadow-lg border w-72 px-5 py-2 text-lg font-medium focus:outline-none">Create</button>
            </div>
        </section>
    )
}

export default CreateResume;
