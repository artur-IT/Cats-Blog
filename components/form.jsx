import Article from "../components/article";
// import myFile from "../src/test.txt";

const Form = (props) => {
  let idArticle = 0;

  const buttonHandler = (e) => {
    e.preventDefault();

    // const rootBlog = ReactDOM.createRoot(document.getElementById(`blog_container`));
    // const newDiv = document.createElement(`div`);
    // newDiv.setAttribute("id", `${idArticle}`);

    const test = props.articlesTable;
    test.push(<Article id={idArticle} />);

    props.updateBlogState(test);
    idArticle++;
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
