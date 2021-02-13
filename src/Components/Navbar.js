import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import '../index.css'



function Navbar() {

  var [date,setDate] = useState(new Date());
    
    
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });
 
    return (
        <div>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">
      <NavLink to="/blog">
                Blog
            </NavLink>
      </a>
      <a class="mr-5 hover:text-gray-900">
      <NavLink to="/about">
                About
            </NavLink>
      </a>
      <a class="mr-5 hover:text-gray-900">
        <NavLink to="/create-blog">
        Create Blog
        </NavLink>
      </a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{date.toLocaleTimeString()} {date.toLocaleDateString()}
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      </svg>
    </button>
  </div>
</header>
            
            
            

            
        </div>
    )
}

export default Navbar
