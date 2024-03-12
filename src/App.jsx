import React from "react";
import ShowArticles from "/components/ShowArticles";
import Form from "/components/Form";
import "../css/addContent.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };

    this.post = [];
  }

  formHandler = () => {
    let authorContent = document.querySelector(".author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;

    const tempObj = {
      author: authorContent,
      date: dateContent,
      title: titleContent,
      content: blogContent,
    };

    this.post.push(tempObj);

    // console.log(author, dateContent, blogContent);
  };

  // UPDATE state AFTER ADD ARTICLE FROM COMPONENT Form
  updateBlogState = (newArticle) => this.setState({ articles: newArticle });

  render() {
    return (
      <>
        <header className="cd-main-header text-center flex flex-column flex-center">
          <h1>Responsive Vertical Timeline</h1>
          <div className="add_content">
            <Form
              allArticles={this.state.articles}
              post={this.post}
              updateBlogState={this.updateBlogState}
              formHandler={this.formHandler}
            />
          </div>
        </header>

        <section className="cd-timeline js-cd-timeline">
          <div className="container max-width-lg cd-timeline__container" id="blog_container">
            <div className="cd-timeline__block">
              <div className="cd-timeline__img cd-timeline__img--picture">
                <img src="../img/cd-icon-picture.svg" alt="Picture" />
              </div>

              <div className="cd-timeline__content text-component">
                <h2>Title of section 1</h2>
                <p className="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
                  tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                </p>

                <div className="flex justify-between items-center">
                  <span className="cd-timeline__date">Jan 14</span>
                  <a href="#0" className="btn btn--subtle">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="cd-timeline__block">
              <div className="cd-timeline__img cd-timeline__img--movie">
                <img src="../img/cd-icon-movie.svg" alt="Movie" />
              </div>

              <div className="cd-timeline__content text-component">
                <h2>Title of section 2</h2>
                <p className="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
                  tempora laudantium ipsa ad debitis unde?
                </p>

                <div className="flex justify-between items-center">
                  <span className="cd-timeline__date">Jan 18</span>
                  <a href="#0" className="btn btn--subtle">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <ShowArticles articles={this.state.articles} />
          </div>
        </section>

        {/* <Timeline /> */}
      </>
    );
  }
}

export default App;
