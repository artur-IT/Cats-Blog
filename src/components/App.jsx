import React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Header } from "../components/Header";
import { Article } from "../components/Article";
import { FormAddPost } from "../components/FormAddPost";

import "../css/myStyle.css";
import "../css/formAddPost.css";
import "../css/loginPanel.css";

function App() {
  const [articlesDB, setArticles] = useState([]);
  const [login, setLogin] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const randKey = nanoid(5);

  // get posts
  const getPosts = () => {
    return fetch("/src/js/articles.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      })
      .catch((error) => console.error("Błąd:", error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  // save to JSON file
  const apiSavePosts = (newPost) => {
    fetch("http://localhost:5173/Cats-Blog/js/articles.json", {
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
          {articlesDB.map((article) => (
            <Article key={article.id} author={article.author} date={article.date} title={article.title} content={article.content} />
          ))}
        </div>
      </section>
      {/* Popup with add new post form after successful login */}
      {showNewPost && (
        <div className="add_content">
          <FormAddPost
            articles={articlesDB}
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
