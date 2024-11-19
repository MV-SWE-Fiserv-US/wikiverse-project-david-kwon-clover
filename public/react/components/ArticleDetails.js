import React, { useEffect, useState } from "react";
import apiURL from "../api";

const ArticleDetails = ({ slug, setSlug, fetchPages }) => {
  const [articleDetails, setArticleDetails] = useState({
    title: "Loading..",
    author: {
      name: "Loading..",
    },
    createdAt: "Loading..",
    content: "Loading..",
    tags: [
      {
        name: "Loading..",
      },
    ],
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function fetchArticleDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const data = await response.json();
      setArticleDetails(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function deleteArticle(slug) {
    const response = await fetch(`${apiURL}/wiki/${slug}`, {
      method: "DELETE"
    });
    if(response.ok) {
      setFeedbackMessage("Article deleted successfully.. redirecting to homepage")
      fetchPages();
      setTimeout(() => {
        location.reload();
      }, 2000)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  function handleBackClick() {
    setSlug("");
  }

  function handleDelete() {
    deleteArticle(slug);
  }

  useEffect(() => {
    fetchArticleDetails(slug);
  }, []);

  return (
    <article className="article-details">
      <h1 className="article-header">{articleDetails.title}</h1>
      <h4 className="article-header">Author: {articleDetails.author.name}</h4>
      <h4 className="article-header">
        Published: {formatDate(articleDetails.createdAt.slice(0, 10))}
      </h4>
      <p className="article-content">{articleDetails.content}</p>
      <h5 className="article tags">Tags: </h5>
      <ul>
        {articleDetails.tags.map((tag) => {
          return <li key={tag.id}>{tag.name}</li>;
        })}
      </ul>
      <button
        type="button"
        className="article-back-button"
        onClick={handleBackClick}
      >
        Back to Wiki List
      </button>
      <button
        type="button"
        className="article-delete-button"
        onClick={handleDelete}
      >
        DELETE Article
      </button>
      <h4 className="form-feedback-message">{feedbackMessage}</h4>
    </article>
  );
};

export default ArticleDetails;
