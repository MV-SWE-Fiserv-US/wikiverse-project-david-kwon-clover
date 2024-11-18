import React, { useEffect, useState } from 'react'

const ArticleDetails = ({ articleDetails }) => {
  useEffect(() => {
    console.log(articleDetails);
  }, [])
  return (
    <article>
      {/* <h1>{articleDetails.title}</h1>
      <h4>Author: {articleDetails.author.name}</h4>
      <h4>Published: {articleDetails.createdAt.slice(0,10)}</h4>
      <p>Content: {articleDetails.content}</p> */}
    </article>
  )
}

export default ArticleDetails