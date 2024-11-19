import React, { useEffect, useState } from "react";
import apiURL from "../api";

const ArticleDetails = ({ slug, setSlug }) => {
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

  async function fetchArticleDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const data = await response.json();
      setArticleDetails(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  function handleBackClick() {
    setSlug("");
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
    </article>
  );
};

export default ArticleDetails;
