const Form = (props) => {
  const articlesTable = props.copyArticles;

  const buttonHandler = (e) => {
    e.preventDefault();
    props.formHandler();
    props.updateBlogState(articlesTable);
  };

  document.addEventListener("load", () => {
    document.querySelector(".uploader__input").addEventListener("change", validateFiles);
  });

  // TEST file upload
  function validateFiles(e) {
    const [file] = e.target.files;

    if (file && file.name.includes(".jpg") && file.type === "image") {
      // możemy zająć się obsługą pliku
      const reader = new FileReader();
      reader.onload = function (event) {
        console.log(event.target.result);
      };
      // reader.readAsText(file);
    } else {
      console.log("Nieprawidłowy plik, wgraj plik jpg.");
    }

    if (file.size > 100000) {
      console.log("Przekroczono limit wielkości pliku.");
      return;
    }

    if (file.name.length > 15) {
      console.log("Plik ma za długą nazwę. Dozwolona liczba znaków: 45.");
      return;
    }
  }

  return (
    <>
      <section className="layout">
        <h3 className="title_top">New Post</h3>
        <div className="title">
          <p>Title:</p>
        </div>
        <div className="title_field">
          <input className="title_content" type="text" name="title_content" />
        </div>

        <div className="content">
          <p>Content:</p>
        </div>
        <div className="content_field">
          <textarea className="blog_content" type="text" name="blog_content" />
        </div>

        <div className="date">
          <p>Date:</p>
        </div>
        <div className="date_field">
          <input className="date_content" type="date" name="date_content" />
        </div>

        <div className="author_label">
          <p>Author:</p>
        </div>
        <div className="author_field">
          <select className="author" name="author">
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
          <button className="btn_add" onClick={buttonHandler}>
            ADD
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;