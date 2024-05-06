import React from "react";
import { useState } from "react";

import { Header } from "/components/Header";
import { Article } from "/components/Article";
import { FormAddPost } from "/components/FormAddPost";

import "../css/myStyle.css";
import "/css/formAddPost.css";
import "/css/loginPanel.css";

import allArticles from "/js/articles.json";

function App() {
  const [articles, setArticles] = useState(allArticles);
  const [login, setLogin] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);

  // All posts in table of components (1 post = 1 component Article)
  let posts = [];

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
      .then((data) => console.log(data))
      .catch((error) => console.error("Błąd:", error));
  };

  // Create tsble of Components with all posts from file / object
  const createArticlesComponentTable = () => {
    posts = [];

    //sort date publication from actual to old
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // create table of components with articles
    for (const el of articles) {
      posts.push(<Article key={posts.length} author={el.author} date={el.date} title={el.title} content={el.content} />);
    }
  };
  const showArticles = (posts) => <>{posts}</>;

  // Change paw bg-color when author Tiger / Indi
  const changePawColor = () => {
    window.onload = () =>
      document
        .querySelectorAll("span")
        .forEach((el) => el.textContent === "Indi" && (el.parentElement.previousSibling.style.backgroundColor = "yellow"));
  };

  // Add new post form handle
  const formAddHandle = () => {
    let authorContent = document.querySelector("select.author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    if ((authorContent && dateContent && titleContent && blogContent) !== "") {
      const newArticle = {
        id: articles.length,
        author: authorContent,
        date: new Date(dateContent).toISOString().substring(0, 10),
        title: titleContent,
        content: blogContent,
      };

      setArticles(...articles, newArticle);
      createArticlesComponentTable();
      apiSavePosts(newArticle);
      showNewPostWindow();
    } else alert("Wszystkie pola muszą być wypełnione!");
    return;
  };

  //STATE'S UPDATES...
  // show / hide LoginPanel
  const loginTopButton = () => setLogin(!login);
  // show / hide addPostForm
  const showNewPostWindow = () => setShowNewPost(!showNewPost);
  // UPDATE state AFTER ADD ARTICLE FROM COMPONENT Form
  const updateBlogState = (newArticle) => setArticles(newArticle);

  return (
    <>
      <Header
        login={login}
        loginState={login}
        copyArticles={articles}
        post={posts}
        updateBlogState={updateBlogState}
        showNewPost={showNewPost}
        showNewPostWindow={showNewPostWindow}
        loginTopButton={loginTopButton}
      />

      <img src="img/wave.svg" className="wave" alt="blue wave" />

      {/* Section with all articles */}
      <section className="cd-timeline js-cd-timeline">
        <div className="container max-width-lg cd-timeline__container" id="blog_container">
          {createArticlesComponentTable()}
          {showArticles(posts)}
          {changePawColor()}
        </div>
      </section>

      {/* Popup with add new post form after successful login */}
      {showNewPost && (
        <div className="add_content">
          <FormAddPost
            copyArticles={articles}
            post={posts}
            updateBlogState={updateBlogState}
            formAddHandle={formAddHandle}
            showNewPostWindow={showNewPostWindow}
            showNewPost={showNewPost}
          />
        </div>
      )}
      {/* ----------- */}
      {/* <form id="uploadForm">
          <input type="file" id="fileInput" />
          <button id="sendButton">Wyślij</button>
        </form> */}
      {/* -------------- */}
    </>
  );
}

export default App;
