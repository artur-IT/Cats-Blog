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
