import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import ArticleDetails from './ArticleDetails'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [slug, setSlug] = useState("");
  const [articleDetails, setArticleDetails] = useState(null);
  
  
  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json();
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  async function fetchArticleDetails(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`)
      const data = await response.json();    
      setArticleDetails(data)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  useEffect(() => {
    fetchArticleDetails(slug);
  }, [slug]);


  return (
		<main className="landing-page">
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
      {slug && articleDetails ? <ArticleDetails articleDetails={articleDetails} /> : <PagesList pages={pages} setSlug={setSlug} /> }
		</main>
  )
}
