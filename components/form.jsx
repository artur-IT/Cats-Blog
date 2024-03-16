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
          <label>
            Author:
            <select className="author" name="author">
              <option></option>
              <option>Indi</option>
              <option>Tiger</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            Date:
            <input className="date_content" type="date" name="date_content" />
          </label>
        </p>

        <p>
          <label>
            Title:
            <input className="title_content" type="text" name="title_content" size="30" />
          </label>
        </p>

        <p>
          <label>
            Content:
            <input className="blog_content" type="text" name="blog_content" size="50" />
          </label>
        </p>

        <button onClick={buttonHandler}>ADD</button>
      </form>
    </>
  );
};

export default Form;
