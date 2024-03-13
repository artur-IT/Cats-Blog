/* eslint-disable react/prop-types */
const Article = (props) => {
  // const index = props.articles.length;
  // const post = props.articles;

  return (
    <div className="cd-timeline__block" id={props.key}>
      <div className="cd-timeline__img cd-timeline__img--picture">
        <img src="../img/paw.svg" alt="paw" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{props.title}</h2>
        <span>{props.date}</span> - <span>{props.author}</span>
        <p className="color-contrast-medium">{props.content}</p>
        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">Jan 18</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
