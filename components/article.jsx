/* eslint-disable react/prop-types */
import { format, parse } from "@formkit/tempo";

const Article = (props) => {
  // const index = props.articles.length;
  // const post = props.articles;
  const addDate = format(new Date(), "medium");

  console.log(props.date, addDate);
  return (
    <div className="cd-timeline__block" id={props.id}>
      <div className="cd-timeline__img cd-timeline__img--picture">
        <img src="../img/paw.svg" alt="paw" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{props.title}</h2>
        <span>{props.date}</span> - <span>{props.author}</span>
        <p className="color-contrast-medium">{props.content}</p>
        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">{addDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
