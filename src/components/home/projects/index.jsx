"use client"
import React, { useState } from "react"; // Import React


const Projects = () => {
  const [tab, setTab] = useState(2)
  function changeProjectTab(e){
    setTab(e)

  }

    return (
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
    <div className="container px-6 py-8 mx-auto">
    <h1 className="text-2xl text-center font-semibold text-gray-800 mx-auto lg:text-4xl dark:text-white">Projects
    <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-44 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-2 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="mt-8 xl:mt-16 md:flex gap-2 lg:-mx-12">
            <div className="lg:mx-12">

                <div className="mt-4 hidden md:block space-y-4 lg:mt-8">
                <button onClick={()=>changeProjectTab(1)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${tab==1?'bg-blue-500':'bg-gray-400'}  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>UI/UX</button>
                    <button onClick={()=>changeProjectTab(2)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${tab==2?'bg-blue-500':'bg-gray-400'}  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>WEB DEVELOPMENT</button>
                    <button onClick={()=>changeProjectTab(3)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${tab==3?'bg-blue-500':'bg-gray-400'}  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>ANDROID DEVELOPMENT</button>
                    <button onClick={()=>changeProjectTab(4)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${tab==4?'bg-blue-500':'bg-gray-400'}  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>AI / ML</button>
                    <button onClick={()=>changeProjectTab(5)} className={`block min-w-[15rem] px-5 py-2   text-sm tracking-wider text-white uppercase transition-colors duration-300 transform ${tab==5?'bg-blue-500':'bg-gray-400'}  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>AR / VR</button>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">

                    {(tab==1)&&(
                        <div>
                        <img className="object-cover w-full rounded-lg h-78 "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""/>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                            collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>
                    )}
                    {(tab==2)&&(
                        <div>
                        <img className="object-cover w-full rounded-lg h-78 "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""/>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                            collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>
                    )}
                    {(tab==3)&&(
                        <div>
                        <img className="object-cover w-full rounded-lg h-78  "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""/>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                            collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>
                    )}
                    {(tab==4)&&(
                        <div>
                        <img className="object-cover w-full rounded-lg h-78  "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""/>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best 
                            collections</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>
                    )}
                    {(tab==5)&&(
                        <div>
                        <img className="object-cover w-full rounded-lg h-78  "
                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                            alt=""/>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best ML</h2>
                        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>
                    )}

                    
                    
                </div>
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Projects
