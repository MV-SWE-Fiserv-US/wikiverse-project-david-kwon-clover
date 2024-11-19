import React, { useState } from "react";

const Form = ({ setFormActive }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    tags: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleBackClick() {
    setFormActive(false);
  }

  return (
    <form className="add-article-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="formTitleInput"
        placeholder="Article Title"
        required
        value={formData.title}
        onChange={handleChange}
      ></input>
      <textarea
        name="content"
        placeholder="Article Content"
        required
        value={formData.content}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="name"
        placeholder="Author Name"
        required
        value={formData.name}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Author Email"
        required
        value={formData.email}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="tags"
        placeholder="Tags(separated by space)"
        required
        value={formData.tags}
        onChange={handleChange}
      ></input>
      <button className="form-submit-button" type="submit">Create Page</button>
      <button className="article-back-button" type="button" onClick={handleBackClick}>Back to Articles</button>
    </form>
  );
};

export default Form;
