const Article = () => {
  return (
    <>
      <div className="cd-timeline__block">
        <div className="cd-timeline__img cd-timeline__img--movie">
          <img src="../img/cd-icon-movie.svg" alt="Movie" />
        </div>
        {/* cd-timeline__img */}

        <div className="cd-timeline__content text-component">
          <h2>Title of section ?</h2>
          <p className="color-contrast-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure
            tempora laudantium ipsa ad debitis unde?
          </p>

          <div className="flex justify-between items-center">
            <span className="cd-timeline__date">Jan 18</span>
          </div>
        </div>
        {/* cd-timeline__content */}
      </div>
    </>
  );
};

export default Article;
