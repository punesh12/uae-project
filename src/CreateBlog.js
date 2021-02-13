import React ,{useState} from 'react'
import { db } from "./Components/Firebase";
import {Editor} from '@tinymce/tinymce-react'



function CreateBlog() {


    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            title:title,
            author:author,
            content:content,
            date: date,
        })
        .then(()=>{
            alert('message has been submitted!')
        })
        .catch((error)=>{
            alert(error.message);
        })

        setTitle('')
        setAuthor('')
        setContent('')
        // setDate('')

        // console.log(window.document.location)


    }

     function handleEditorChange(content, editor) {
        console.log('Content was updated:', content);
      }



    return (
        <div>
        <section class="text-gray-600 body-font relative">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-col text-center w-full mb-12">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create your Blog</h1>
  {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
</div>
<div class="lg:w-1/2 md:w-2/3 mx-auto">

    
<form class="flex flex-wrap -m-2" onSubmit={handleSubmit} >
<div class="p-2 w-full">
        <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Title</label>
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text" id="email" name="email" placeholder="Title" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        </div>

        <div class="p-2 w-full">
        <div class="relative">
            <label for="author" class="leading-7 text-sm text-gray-600">Author</label>
            <input 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text" id="email" name="email" placeholder="Author" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        </div>
    
        <div class="p-2 w-full">
        <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Content</label>
            <textarea
            id="text-area"
            // apiKey='wlvx06wdwjuii7w34tokoqlszkkzrflz83a1l4tispxybvw9'
            // initialValue="<p>Start your blog content here!</p>"
            // init={{
            //   height: 250,
            //   menubar: false,
            //   plugins: [
            //     'advlist autolink lists link image charmap print preview anchor',
            //     'searchreplace visualblocks code fullscreen',
            //     'insertdatetime media table paste code help wordcount'
            //   ],
            //   toolbar:
            //     'undo redo | formatselect | bold italic backcolor | \
            //     alignleft aligncenter alignright alignjustify | \
            //     bullist numlist outdent indent | removeformat | help'
            // }} 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
         ></textarea>


         
        </div>
        </div>
        <div class="p-2 w-full">
        <input type="submit" class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"  value="Post"/>
        </div>

</form>

</div>
</div>
</section>
        
    </div>

    )
}

export default CreateBlog
