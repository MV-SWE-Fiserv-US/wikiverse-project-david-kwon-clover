import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import ArticleDetails from "./ArticleDetails";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [slug, setSlug] = useState("");

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main className="landing-page">
      <h1>WikiVerse</h1>
      <h2>An interesting hub for articles📚</h2>
      {slug ? (
        <ArticleDetails slug={slug} setSlug={setSlug} />
      ) : (
        <PagesList pages={pages} setSlug={setSlug} />
      )}
      <button type="button" className="article-add-button">Add your own article</button>
    </main>
  );
};
