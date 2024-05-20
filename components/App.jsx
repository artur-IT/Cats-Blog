import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

import { Header } from "/components/Header";
import { Article } from "/components/Article";
import { FormAddPost } from "/components/FormAddPost";

import "../css/myStyle.css";
import "/css/formAddPost.css";
import "/css/loginPanel.css";

import articlesDB from "/js/articles.json";

function App() {
  articlesDB.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Create tsble of Components with all posts from file / object
  const mapArticlesToComponents = (articlesDB) => {
    return articlesDB.map((article) => (
      <Article key={article.id} author={article.author} date={article.date} title={article.title} content={article.content} />
    ));
  };

  const [articles, setArticles] = useState(mapArticlesToComponents(articlesDB));
  const [login, setLogin] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const randKey = nanoid(5);

  // save to JSON file
  const apiSavePosts = (newPost) => {
    fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Błąd:", error));
  };

  // show / hide addPostForm
  const showNewPostWindow = () => setShowNewPost(!showNewPost);

  return (
    <>
      <Header login={login} showNewPostWindow={showNewPostWindow} loginTopButton={() => setLogin(!login)} showNewPost={showNewPost} />

      <img src="img/wave.svg" className="wave" alt="blue wave" />

      {/* Section with all articles */}
      <section className="cd-timeline js-cd-timeline">
        <div className="container max-width-lg cd-timeline__container" id="blog_container">
          {articles}
        </div>
      </section>

      {/* Popup with add new post form after successfull login */}
      {showNewPost && (
        <div className="add_content">
          <FormAddPost
            articles={articles}
            updateBlogState={(newArticle) => setArticles(newArticle)}
            showNewPostWindow={showNewPostWindow}
            showNewPost={showNewPost}
            randKey={randKey}
            apiSavePosts={apiSavePosts}
            setArticles={setArticles}
            setShowNewPost={() => setShowNewPost(!showNewPost)}
          />
        </div>
      )}
    </>
  );
}

export default App;
