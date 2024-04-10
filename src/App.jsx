import React from "react";
import ShowArticles from "/components/ShowArticles";
import Article from "/components/Article";
import Form from "/components/Form";
import "/css/addContent.css";

// read all articles from JSON file
import articles from "/js/articles";
console.log(articles);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
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

  formHandler = () => {
    let authorContent = document.querySelector(".author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    const newArticle = {
      id: this.copyArticles.length,
      author: authorContent,
      date: new Date(dateContent).toISOString(),
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
    for (const el of this.copyArticles) {
      this.posts.push(<Article key={this.posts.length} author={el.author} date={el.date} title={el.title} content={el.content} />);
    }
  };

  // UPDATE state AFTER ADD ARTICLE FROM COMPONENT Form
  updateBlogState = (newArticle) => this.setState({ articles: newArticle });

  render() {
    return (
      <>
        {/* {this.apiReadPosts()} */}
        <header className="cd-main-header text-center flex flex-column flex-center">
          <h1>Responsive Vertical Timeline</h1>
          <div className="add_content">
            <Form copyArticles={this.copyArticles} post={this.post} updateBlogState={this.updateBlogState} formHandler={this.formHandler} />
          </div>
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
