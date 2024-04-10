/* eslint-disable react/prop-types */

const Form = (props) => {
  const articlesTable = props.copyArticles;

  const buttonHandler = (e) => {
    e.preventDefault();
    props.formHandler();
    props.updateBlogState(articlesTable);
  };
  return (
    <>
      <section className="layout">
        <div className="title">
          <label>Title:</label>
        </div>
        <div className="title_field">
          <input className="title_content" type="text" name="title_content" size="30" />
        </div>

        <div className="content">
          <label>Content:</label>
        </div>
        <div className="content_field">
          <input className="blog_content" type="text" name="blog_content" size="50" />
        </div>

        <div className="date">
          <label>Date:</label>
        </div>
        <div className="date_field">
          <input className="date_content" type="date" name="date_content" />
        </div>

        <div className="author">
          <label>Author:</label>
        </div>
        <div className="author_field">
          <select className="author" name="author">
            <option></option>
            <option>Indi</option>
            <option>Tiger</option>
          </select>
        </div>

        <div className="empty"></div>
        <div className="button">
          <button className="btn_add" onClick={buttonHandler}>
            ADD
          </button>
        </div>
      </section>

      <form>
        {/* <p>
          <label>
            Author:
            <select className="author" name="author">
              <option></option>
              <option>Indi</option>
              <option>Tiger</option>
            </select>
          </label>
        </p> */}

        {/* <p>
          <label>
            Date:
            <input className="date_content" type="date" name="date_content" />
          </label>
        </p> */}

        {/* <p>
          <label>
            Title:
            <input className="title_content" type="text" name="title_content" size="30" />
          </label>
        </p> */}

        {/* <p>
          <label>
            Content:
            <input className="blog_content" type="text" name="blog_content" size="50" />
          </label>
        </p> */}

        {/* <button className="btn_add" onClick={buttonHandler}>
          ADD
        </button> */}
      </form>
    </>
  );
};

export default Form;
