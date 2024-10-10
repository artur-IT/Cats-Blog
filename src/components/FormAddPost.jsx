import { useState } from "react";

export const FormAddPost = ({ setShowNewPost, setArticles, randKey, getPosts, showNewPostWindow }) => {
  // Show button 'Login' after click X to close addPostForm
  const iconXCloseHandle = () => showNewPostWindow();

  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Add new post form handle
  const formAddHandle = async (e) => {
    e.preventDefault();
    const id = randKey;
    let newArticle = null;

    if (author && content && title && content && date) {
      newArticle = { id, author, date: new Date(date).toISOString().substring(0, 10), title, content };

      try {
        const response = await fetch("/api/addArticle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newArticle),
        });
        if (response.ok) {
          getPosts();
          setShowNewPost(false);
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Wszystkie pola muszą być wypełnione!");
    }

    // fetch("/api/addArticle", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ title, content, date, author }),
    // });

    // hide Form AddPost
    // setShowNewPost();
    // } else return alert("Wszystkie pola muszą być wypełnione!");
  };

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
            maxLength={50}
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
            maxLength={250}
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
