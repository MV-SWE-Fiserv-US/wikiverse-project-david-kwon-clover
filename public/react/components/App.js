import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import ArticleDetails from "./ArticleDetails";
import Form from "./Form";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [slug, setSlug] = useState("");
  const [formActive, setFormActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      <input type="text" placeholder="Search by title..." className="search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}></input>
      {slug || formActive ? (
        (slug && <ArticleDetails slug={slug} setSlug={setSlug} fetchPages={fetchPages}/>) ||
        (formActive && <Form setFormActive={setFormActive} fetchPages={fetchPages}/>)
      ) : (
        <>
          <PagesList pages={searchQuery ? pages.filter((page) => { return page.title.toLowerCase().includes(searchQuery)}) : pages} setSlug={setSlug} />
          <button
            type="button"
            className="article-add-button"
            onClick={() => setFormActive(true)}
          >
            Add your own article
          </button>
        </>
      )}
    </main>
  );
};
