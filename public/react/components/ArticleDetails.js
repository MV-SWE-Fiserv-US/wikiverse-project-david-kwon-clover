import React, { useEffect, useState } from 'react';
import apiURL from '../api';

const ArticleDetails = ({ slug }) => {
  const [articleDetails, setArticleDetails] = useState({
    title: "Loading..",
    author: {
      name: "Loading.."
    },
    createdAt: "Loading..",
    content: "Loading..",
    tags: [
      {
        name: "Loading.."
      }
    ]
  });

  async function fetchArticleDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`)
      const data = await response.json();    
      setArticleDetails(data)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  useEffect(() => {
    fetchArticleDetails(slug);
  }, [])

  return (
    <article className='article-details'>
      <h1 className='article-details-title'>{articleDetails.title}</h1>
      <h4>Author: {articleDetails.author.name}</h4>
      <h4>Published: {formatDate(articleDetails.createdAt.slice(0,10))}</h4>
      <p>{articleDetails.content}</p>
      <h5>Tags: </h5>
      <ul>
        {articleDetails.tags.map((tag) => {
          return <li key={tag.id}>{tag.name}</li>
        })}
      </ul>
    </article>
  )
  
}

export default ArticleDetails