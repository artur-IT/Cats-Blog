/* eslint-disable react/prop-types */
import { format, parse } from "@formkit/tempo";

const Article = (props) => {
  const addDate = format(props.date, "medium");
  // parse(props.data);
  // const ISOdate = props.date.toISOString();
  // const x = format(props.date, "D MMMM YYYY");

  // console.log(props.date);
  return (
    <div className="cd-timeline__block" id={props.id}>
      <div className="cd-timeline__img cd-timeline__img--picture">
        <img src="../img/paw.svg" alt="paw" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{props.title}</h2>
        <span>{props.author}</span>
        <p className="color-contrast-medium">{props.content}</p>
        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">{addDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
