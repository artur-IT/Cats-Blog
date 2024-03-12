/* eslint-disable react/prop-types */
import Article from "../components/article";
// import myFile from "../src/test.txt";

const Form = (props) => {
  const articlesTable = props.allArticles;
  const buttonHandler = (e) => {
    e.preventDefault();

    articlesTable.push(<Article key={articlesTable.length} articles={articlesTable} />);

    props.updateBlogState(articlesTable);
  };
  // console.log(props.articlesTable);
  return (
    <>
      <form>
        <p>
          <label>Author:</label>
          <select name="author">
            <option></option>
            <option>Indi</option>
            <option>Tiger</option>
          </select>
        </p>

        <p>
          <label>Date:</label> <input type="date" name="date_content" />
        </p>

        <p>
          <label>Content:</label> <input type="text" name="blog_content" size="50" />
        </p>

        <button onClick={buttonHandler}>ADD</button>
      </form>
    </>
  );
};

export default Form;
