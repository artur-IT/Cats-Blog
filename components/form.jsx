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
      <form>
        <p>
          <label>Author:</label>
          <select className="author" name="author">
            <option></option>
            <option>Indi</option>
            <option>Tiger</option>
          </select>
        </p>

        <p>
          <label>Date:</label> <input className="date_content" type="date" name="date_content" />
        </p>

        <p>
          <label>Title:</label> <input className="title_content" type="text" name="title_content" size="30" />
        </p>

        <p>
          <label>Content:</label> <input className="blog_content" type="text" name="blog_content" size="50" />
        </p>

        <button onClick={buttonHandler}>ADD</button>
      </form>
    </>
  );
};

export default Form;
