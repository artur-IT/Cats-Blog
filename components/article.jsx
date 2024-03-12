/* eslint-disable react/prop-types */
const Article = (props) => {
  const index = props.articles.length;
  // console.log(props.post[index - 1].content);

  return (
    <div className="cd-timeline__block">
      <div className="cd-timeline__img cd-timeline__img--picture" id={props.articles.length}>
        <img src="../img/paw.svg" alt="Movie" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{props.post[index - 1].title}</h2>
        <span>{props.post[index - 1].date}</span> - <span>{props.post[0].author}</span>
        <p className="color-contrast-medium">{props.post[index - 1].content}</p>
        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">Jan 18</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
