import React from "react";
import ShowArticles from "/components/ShowArticles";
import Article from "/components/Article";
import { LoginPanel } from "../components/LoginPanel";
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
  loginTopButtonHandle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ login: !prevState.login }));
  };

  // show / hide addPostForm
  showNewPostHandle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ showNewPost: !prevState.showNewPost }));
  };

  formHandler = () => {
    let authorContent = document.querySelector("select.author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    const newArticle = {
      id: this.copyArticles.length,
      author: authorContent,
      date: new Date(dateContent).toISOString().substring(0, 10),
      title: titleContent,
      content: blogContent,
    };

    this.copyArticles.push(newArticle);
    // this.setState({ articles: this.posts });
    this.createArticlesComponentTable();
    this.apiSavePosts(newArticle);
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

          {this.state.login ? (
            <LoginPanel
              state={this.state.login}
              copyArticles={this.copyArticles}
              post={this.post}
              updateBlogState={this.updateBlogState}
              formHandler={this.formHandler}
              loginHandle={this.loginHandle}
              showNewPost={this.state.showNewPost}
              showNewPostHandle={this.showNewPostHandle}
            />
          ) : null}

          <h1>Cat Blog - our crazy, lazy life</h1>
        </header>

        <section className="cd-timeline js-cd-timeline">
          <div className="container max-width-lg cd-timeline__container" id="blog_container">
            {this.createArticlesComponentTable()}
            <ShowArticles posts={this.posts} />
          </div>
        </section>
      </>
    );
  }
}

export default App;
