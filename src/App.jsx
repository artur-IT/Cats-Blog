import React from "react";
import ShowArticles from "/components/ShowArticles";
import Article from "/components/Article";
import Form from "/components/Form";

import fs from "fs";
// import require from "/js/require";
import "../css/addContent.css";

// import TimmelineCodeJS from "/js/main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: 0,
          author: "artur",
          date: new Date("2024-01-30"),
          title: "Mój tytuł",
          content: "...treść....",
        },
        {
          id: 1,
          author: "kasia",
          date: new Date("2024-08-21"),
          title: "Tytuł 2",
          content: "...treść....",
        },
        {
          id: 2,
          author: "jarek",
          date: new Date("2024-12-24"),
          title: "Tytuł 3",
          content: "...treść....",
        },
      ],
    };

    this.copyArticles = this.state.articles;

    // All posts in table of components (1 post = 1 component Article)
    this.posts = [];
  }

  test = () => {
    fs.writeFile("moj_plik.txt", "okna");
  };

  // testFILE = () => {
  //   function writeToFile(d1, d2) {
  //     var fso = new ActiveXObject("Scripting.FileSystemObject");
  //     var fh = fso.OpenTextFile("data.txt", 8, false, 0);
  //     fh.WriteLine(d1 + "," + d2);
  //     fh.Close();
  //   }
  //   var submit = document.getElementById("submit");
  //   submit.onclick = function () {
  //     var id = document.getElementById("id").value;
  //     var content = document.getElementById("content").value;
  //     writeToFile(id, content);
  //   };
  // };

  // saveIncome(){
  //   var amount = 'okna'
  //   var fo = fopen("//test.txt","w");
  //   fwrite("../Data/Data.txt",amount);
  //   fclose("../Data/Data.txt");
  // }

  // hmmmm = () => {
  //   var blob = new Blob(["some text"], { type: "text/plain;charset=utf-8;" });
  //   saveAs(blob, "thing.txt");
  // };

  // separator = "_*_";
  // textBoxes = ["inputTextToSave1", "inputTextToSave2"];
  // saveTextAsFile() {
  //   var textToSave = "";
  //   for (var a = 0; a < this.textBoxes.length; a++) {
  //     textToSave +=
  //       a < this.textBoxes.length - 1
  //         ? document.getElementById(this.textBoxes[a]).value + this.separator
  //         : document.getElementById(this.textBoxes[a]).value;
  //   }
  //   var textToSaveAsBlob = new Blob([textToSave], {
  //     type: "text/plain",
  //   });
  //   var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  //   var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

  //   var downloadLink = document.createElement("a");
  //   downloadLink.download = fileNameToSaveAs;
  //   downloadLink.innerHTML = "Download File";
  //   downloadLink.href = textToSaveAsURL;
  //   downloadLink.onclick = this.destroyClickedElement;
  //   downloadLink.style.display = "none";
  //   document.body.appendChild(downloadLink);

  //   downloadLink.click();
  // }

  // destroyClickedElement(event) {
  //   document.body.removeChild(event.target);
  // }

  // loadFileAsText() {
  //   var fileToLoad = "/test.txt";
  //   console.log(fileToLoad);
  //   // document.getElementById("fileToLoad").files[0];

  //   var fileReader = new FileReader();
  //   fileReader.onload = function (fileLoadedEvent) {
  //     var textFromFileLoaded = fileLoadedEvent.target.result;
  //     var textesArray = textFromFileLoaded.split(this.separator);
  //     for (var a = 0; a < this.textBoxes.length; a++) {
  //       document.getElementById(this.textBoxes[a]).value = textesArray[a];
  //     }
  //   };
  //   fileReader.readAsText(fileToLoad, "UTF-8");
  // }

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
        {this.test()}
        <header className="cd-main-header text-center flex flex-column flex-center">
          <h1>Responsive Vertical Timeline</h1>
          <div className="add_content">
            <Form copyArticles={this.copyArticles} post={this.post} updateBlogState={this.updateBlogState} formHandler={this.formHandler} />
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

            {/* <div className="cd-timeline__block">
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
                </div>
              </div>
            </div> */}

            {this.createArticlesTable()}
            <ShowArticles posts={this.posts} />
          </div>
        </section>
      </>
    );
  }
}

export default App;
