import React from "react";
import { useState } from "react";

import ShowArticles from "./ShowArticles";
import Article from "./Article";
import { LoginPanel } from "../components/LoginPanel";
import FormAddPost from "/components/FormAddPost";
import CatsInfo from "/components/CatsInfo";
import "../css/myStyle.css";
import "/css/formAddPost.css";
import "/css/loginPanel.css";

// read all articles from JSON file
import allArticles from "/js/articles";

function App() {
  const [articles, setArticles] = useState(allArticles);
  const [login, setLogin] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  let posts = [];

  // constructor() {
  //   super();
  //   this.state = {
  //     articles: articles,
  //     login: false,
  //     showNewPost: false,
  //   };

  //   this.copyArticles = this.state.articles;

  // All posts in table of components (1 post = 1 component Article)
  //   this.posts = [];
  // }

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

  // show / hide LoginPanel
  const loginTopButton = () => setLogin(!login);

  // Hide button after login and show when post added
  const loginTopButtonHide = () => showNewPost === true && (document.querySelector(".login_top_btn").style.display = "none");

  // show / hide addPostForm
  const showNewPostWindow = () => setShowNewPost(!showNewPost);

  // Add new post form
  const formAddHandle = () => {
    let authorContent = document.querySelector("select.author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    if ((authorContent && dateContent && titleContent && blogContent) !== "") {
      const newArticle = {
        id: this.copyArticles.length,
        author: authorContent,
        date: new Date(dateContent).toISOString().substring(0, 10),
        title: titleContent,
        content: blogContent,
      };

      this.copyArticles.push(newArticle);
      this.createArticlesComponentTable();
      this.apiSavePosts(newArticle);
      this.showNewPostWindow();
    } else alert("Wszystkie pola muszą być wypełnione!");
    return;
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

  // Change paw bg-color when author Tiger / Indi
  const changePawColor = () => {
    window.onload = () =>
      document
        .querySelectorAll("span")
        .forEach((el) => (el.textContent === "Indi" ? (el.parentElement.previousSibling.style.backgroundColor = "yellow") : null));
  };

  // UPDATE state AFTER ADD ARTICLE FROM COMPONENT Form
  const updateBlogState = (newArticle) => setArticles(newArticle);

  return (
    <>
      {changePawColor()}

      <header className="cd-main-header text-center flex flex-column flex-center">
        <div className="login_top_btn" onClick={loginTopButton}>
          Login
        </div>

        {/* Author's pictures */}
        <CatsInfo />

        {login && (
          <LoginPanel
            state={login}
            copyArticles={articles}
            post={posts}
            updateBlogState={updateBlogState}
            showNewPost={showNewPost}
            showNewPostWindow={showNewPostWindow}
            loginTopButton={loginTopButton}
          />
        )}

        <h1>Cat Blog - our crazy, lazy life</h1>
      </header>
      {/* ----------- */}
      {/* <form id="uploadForm">
          <input type="file" id="fileInput" />
          <button id="sendButton">Wyślij</button>
        </form> */}
      {/* -------------- */}
      <img src="img/wave.svg" className="wave" alt="wave" />

      <section className="cd-timeline js-cd-timeline">
        <div className="container max-width-lg cd-timeline__container" id="blog_container">
          {createArticlesComponentTable()}
          <ShowArticles posts={posts} />
        </div>
      </section>

      {/* popup with add new post form after successful login */}
      {showNewPost && (
        <div className="add_content">
          <FormAddPost
            copyArticles={articles}
            post={posts}
            updateBlogState={updateBlogState}
            formAddHandle={formAddHandle}
            showNewPostWindow={showNewPostWindow}
            loginTopButtonHide={loginTopButtonHide}
          />
        </div>
      )}
    </>
  );
}

export default App;
