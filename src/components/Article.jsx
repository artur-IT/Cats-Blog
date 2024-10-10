import { format } from '@formkit/tempo';

export const Article = ({ author, date, title, content }) => {
  const addPostDate = format(date, 'medium');
  return (
    <div className="cd-timeline__block">
      <div
        className={`cd-timeline__img cd-timeline__img--picture ${author === 'Indi' && 'paw_bg-yellow'}`}
        data-content="Indi"
      >
        <img src="img/paw.svg" alt="paw" />
      </div>

      <div className="cd-timeline__content text-component">
        <h2>{title}</h2>
        <span>{author}</span>
        <p className="color-contrast-medium">{content}</p>
        <div className="flex justify-between items-center">
          <span className="cd-timeline__date">{addPostDate}</span>
        </div>
      </div>
    </div>
  );
};
