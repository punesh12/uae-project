import React , {useState, useEffect} from 'react'
import { db } from "./Firebase";

function Blog() {

    const [posts , setPosts] = useState(
        []);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))

        })
    })

    return (
        <div>
            <section class="text-gray-600 body-font">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Blog Posts</h1>

                
  <div class="container px-5 py-24 mx-auto">


    <div class="flex flex-wrap -m-4">
    {
        posts.map(
            (vari)=>(
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div class="p-6">
                <span class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{vari.author} {vari.content}</span>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{vari.title}  </h1>
                  <p class="leading-relaxed mb-3"> {vari.content}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
      

            )
        )
    }


    
    </div>
  </div>
</section>
            
        </div>
    )
}

export default Blog
