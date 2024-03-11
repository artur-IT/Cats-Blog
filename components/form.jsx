const Form = () => {
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

        <button>ADD</button>
      </form>
    </>
  );
};

export default Form;
