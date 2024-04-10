import React from "react";
import ShowArticles from "/components/ShowArticles";
import Article from "/components/Article";
import Form from "/components/Form";
import "/css/addContent.css";

// read all articles from file .js
import articles from "/js/articles";

let newPost = {
  id: articles.length,
  author: "artur",
  date: new Date("2024-01-30"),
  title: "Mój tytuł",
  content: "...treść....",
};
// Object.assign(data.articles, { x });
console.log(articles);
//-----------------

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

  // save to file .json
  apiSavePosts = () => {
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

  // read from file .txt
  // apiReadPosts = () => {
  //   fetch("/src/postsJSON.txt")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  formHandler = () => {
    let authorContent = document.querySelector(".author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    const tempObj = {
      id: this.copyArticles.length,
      author: authorContent,
      date: new Date(dateContent).toISOString(),
      title: titleContent,
      content: blogContent,
    };

    this.copyArticles.push(tempObj);
    // this.setState({ articles: this.posts });
    this.createArticlesTable();
  };

  // Create tsble of Components with all posts from file / object
  createArticlesTable = () => {
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
            <Form
              copyArticles={this.copyArticles}
              post={this.post}
              updateBlogState={this.updateBlogState}
              formHandler={this.apiSavePosts}
            />
          </div>
        </header>

        <section className="cd-timeline js-cd-timeline">
          <div className="container max-width-lg cd-timeline__container" id="blog_container">
            {/* first post! */}
            <div className="cd-timeline__block">
              <div className="cd-timeline__img cd-timeline__img--picture">
                <img src="../img/paw.svg" alt="Picture" />
              </div>

              <div className="cd-timeline__content text-component">
                <h2>Title of section 1</h2>
                <p className="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
                  tempora laudantium ipsa ad debitis unde?
                </p>

                <div className="flex justify-between items-center">
                  <span className="cd-timeline__date">Jan 14</span>
                </div>
              </div>
            </div>

            {this.createArticlesTable()}
            <ShowArticles posts={this.posts} />
          </div>
        </section>
      </>
    );
  }
}

export default App;
