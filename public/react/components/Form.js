import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    tags: ""
  })

  
  return (
    <form className='add-article-form'>
        <input type='text' name="title" placeholder='Article Title' required></input>
        <input type='text' name="name" placeholder='Author Name' required></input>
        <input type='text' name="email" placeholder='Author Email' required></input>
        <textarea name="content" placeholder='Article Content' required></textarea>
        <input type='text' name="tags" placeholder='Tags(separated by space)' required></input>
        <button>Create Page</button>
    </form>
  )
}

export default Form