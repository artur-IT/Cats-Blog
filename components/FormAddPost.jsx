import { Article } from "/components/Article";

export const FormAddPost = ({ articles, setShowNewPost, setArticles, randKey, apiSavePosts, showNewPost, showNewPostWindow }) => {
  // Hide button after login and show when post added
  const loginTopButtonHide = () => showNewPost === true && (document.querySelector(".login_top_btn").style.display = "none");

  loginTopButtonHide();

  // Add new post form handle
  const formAddHandle = () => {
    let authorContent = document.querySelector("select.author").value;
    let dateContent = document.querySelector(".date_content").value;
    let titleContent = document.querySelector(".title_content").value;
    let blogContent = document.querySelector(".blog_content").value;
    const newKey = randKey;
    let newArticle = null;

    if ((authorContent && dateContent && titleContent && blogContent) !== "") {
      newArticle = {
        id: newKey,
        author: authorContent,
        date: new Date(dateContent).toISOString().substring(0, 10),
        title: titleContent,
        content: blogContent,
      };

      // createArticlesComponentTable();
      apiSavePosts(newArticle);

      // hide Form AddPost
      setShowNewPost();
    } else alert("Wszystkie pola muszą być wypełnione!");
    return setArticles((prevState) => {
      return [
        <Article key={newKey} author={newArticle.author} date={newArticle.date} title={newArticle.title} content={newArticle.content} />,
        ,
        ...prevState,
      ];
    });
  };

  const buttonAddHandler = (e) => {
    e.preventDefault();
    formAddHandle();
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    loginTopButtonHide();
  };

  // document.addEventListener("load", () => {
  //   document.querySelector(".uploader__input").addEventListener("change", validateFiles);
  // });

  const buttonCloseHandle = () => {
    showNewPostWindow();
    document.querySelector(".login_top_btn").style.display = "block";
  };

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
        <div className="close" onClick={buttonCloseHandle}>
          x
        </div>
        <div className="title">
          <label htmlFor="title">Tytuł</label>
        </div>
        <div className="title_field">
          <input className="title_content" type="text" name="title_content" id="title" />
        </div>

        <div className="content">
          <label htmlFor="content">Treść</label>
        </div>
        <div className="content_field">
          <textarea className="blog_content" type="text" name="content" id="content" />
        </div>

        <div className="date">
          <label htmlFor="date">Data</label>
        </div>
        <div className="date_field">
          <input className="date_content" type="date" name="date" id="date" />
        </div>

        <div className="author_label">
          <label htmlFor="author">Autor</label>
        </div>
        <div className="author_field">
          <select className="author" name="author" id="author">
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
          <button className="btn_add" onClick={buttonAddHandler}>
            Dodaj
          </button>
        </div>
      </form>
    </>
  );
};
