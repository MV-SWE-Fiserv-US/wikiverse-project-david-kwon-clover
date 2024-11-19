import React, { useState } from "react";
import apiURL from "../api";

const Form = ({ setFormActive, fetchPages }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    tags: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function postArticle(articleData) {
    try {
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                articleData
            )
        });
        if(response.ok) {
            setFeedbackMessage("Your article was successfully posted");
        }
        fetchPages();
      } catch (err) {
        setFeedbackMessage("Oh no an error! ", err);
      }
  } 

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    postArticle(formData);
  }

  function handleBackClick() {
    setFormActive(false);
  }

  return (
      <form className="add-article-form" onSubmit={handleSubmit}>
       <h3 className="form-feedback-message">{feedbackMessage}</h3>
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
