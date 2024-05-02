import React from "react";
import ShowArticles from "./ShowArticles";
import Article from "./Article";
import { LoginPanel } from "../components/LoginPanel";
import FormAddPost from "/components/FormAddPost";
import CatsInfo from "/components/CatsInfo";
import "../css/myStyle.css";
import "/css/addPostForm.css";
import "/css/loginPanel.css";

// read all articles from JSON file
import articles from "/js/articles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      login: false,
      showNewPost: false,
    };

    this.copyArticles = this.state.articles;

    // All posts in table of components (1 post = 1 component Article)
    this.posts = [];
  }

  // save to JSON file
  apiSavePosts = (newPost) => {
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
  loginTopButtonHandle = () => {
    this.setState((prevState) => ({ login: !prevState.login }));
  };

  loginTopButtonBlock = () => {
    if (this.state.showNewPost === true) {
      document.querySelector(".login_top_btn").style.display = "none";
    }
  };

  // show / hide addPostForm
  showNewPostWindow = () => {
    this.setState((prevState) => ({ showNewPost: !prevState.showNewPost }));
  };

  formHandler = () => {
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
    } else {
      alert("Wszystkie pola muszą być wypełnione!");
      return;
    }
  };

  // Create tsble of Components with all posts from file / object
  createArticlesComponentTable = () => {
    this.posts = [];
    //sort date publication from actual to old
    this.copyArticles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    for (const el of this.copyArticles) {
      this.posts.push(<Article key={this.posts.length} author={el.author} date={el.date} title={el.title} content={el.content} />);
    }
  };

  // UPDATE state AFTER ADD ARTICLE FROM COMPONENT Form
  updateBlogState = (newArticle) => this.setState({ articles: newArticle });

  render() {
    return (
      <>
        <header className="cd-main-header text-center flex flex-column flex-center">
          <div className="login_top_btn" onClick={this.loginTopButtonHandle}>
            Login
          </div>

          <CatsInfo />

          {this.state.login ? (
            <LoginPanel
              state={this.state.login}
              copyArticles={this.copyArticles}
              post={this.post}
              updateBlogState={this.updateBlogState}
              formHandler={this.formHandler}
              loginHandle={this.loginHandle}
              showNewPost={this.state.showNewPost}
              showNewPostWindow={this.showNewPostWindow}
              loginTopButtonHandle={this.loginTopButtonHandle}
            />
          ) : null}

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
            {this.createArticlesComponentTable()}
            <ShowArticles posts={this.posts} />
          </div>
        </section>
        {/* popup with add new post form after successful login */}
        {this.state.showNewPost ? (
          <div className="add_content">
            <FormAddPost
              copyArticles={this.copyArticles}
              post={this.post}
              updateBlogState={this.updateBlogState}
              formHandler={this.formHandler}
              showNewPostWindow={this.showNewPostWindow}
              loginTopButtonBlock={this.loginTopButtonBlock}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default App;
