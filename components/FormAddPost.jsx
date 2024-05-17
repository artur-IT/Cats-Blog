import React, { useState } from "react";
import { Article } from "/components/Article";

export const FormAddPost = ({ setShowNewPost, setArticles, randKey, apiSavePosts, showNewPostWindow }) => {
  // Show button 'Login' after click X to close addPostForm
  const iconXCloseHandle = () => showNewPostWindow();

  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add new post form handle
  const formAddHandle = (e) => {
    e.preventDefault();
    const id = randKey;
    let newArticle = null;

    if (author && content && title && content && date) {
      newArticle = { id, author, date: new Date(date).toISOString().substring(0, 10), title, content };

      // save new post to DataBase in .json
      apiSavePosts(newArticle);

      // hide Form AddPost
      setShowNewPost();
    } else return alert("Wszystkie pola muszą być wypełnione!");

    return setArticles((prevState) => {
      return [
        <Article key={id} author={newArticle.author} date={newArticle.date} title={newArticle.title} content={newArticle.content} />,
        ,
        ...prevState,
      ];
    });
  };

  // document.addEventListener("load", () => {
  //   document.querySelector(".uploader__input").addEventListener("change", validateFiles);
  // });

  // TEST file upload
  // function validateFiles(e) {
  //   const [file] = e.target.files;

  //   if (file && file.name.includes(".jpg") && file.type === "image") {
  //     // możemy zająć się obsługą pliku
  //     const reader = new FileReader();
  //     reader.onload = function (event) {
  //       console.log(event.target.result);
  //     };
  //     // reader.readAsText(file);
  //   } else {
  //     console.log("Nieprawidłowy plik, wgraj plik jpg.");
  //   }

  //   if (file.size > 100000) {
  //     console.log("Przekroczono limit wielkości pliku.");
  //     return;
  //   }

  //   if (file.name.length > 15) {
  //     console.log("Plik ma za długą nazwę. Dozwolona liczba znaków: 45.");
  //     return;
  //   }
  // }

  return (
    <>
      <form className="layout">
        <h3 className="title_top">Krótki Post</h3>
        <div className="close" onClick={iconXCloseHandle}>
          x
        </div>
        <div className="title">
          <label htmlFor="title">Tytuł</label>
        </div>
        <div className="title_field">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="title_content"
            type="text"
            name="title_content"
            id="title"
          />
        </div>

        <div className="content">
          <label htmlFor="content">Treść</label>
        </div>
        <div className="content_field">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="blog_content"
            type="text"
            name="content"
            id="content"
          />
        </div>

        <div className="date">
          <label htmlFor="date">Data</label>
        </div>
        <div className="date_field">
          <input onChange={(e) => setDate(e.target.value)} value={date} className="date_content" type="date" name="date" id="date" />
        </div>

        <div className="author_label">
          <label htmlFor="author">Autor</label>
        </div>
        <div className="author_field">
          <select className="author" onChange={(e) => setAuthor(e.target.value)} name="author" id="author" value={author}>
            <option></option>
            <option>Indi</option>
            <option>Tiger</option>
          </select>
        </div>

        {/* <div className="file">
          <form className="uploader">
            <label className="uploader__label">
              Wybierz plik JPG:
              <input className="uploader__input" type="file" accept=".jpg" />
            </label>
          </form>
        </div> */}

        <div className="empty"></div>
        <div className="button">
          <button className="btn_add" type="submit" onClick={formAddHandle}>
            Dodaj
          </button>
        </div>
      </form>
    </>
  );
};
