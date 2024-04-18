const CatsInfo = () => {
  const authorName = (name) => console.log(name);
  const showIndi = () => document.querySelector(".indi").classList.toggle("indi_show");
  const showTiger = () => document.querySelector(".tiger").classList.toggle("tiger_show");

  return (
    <section className="cats_info">
      <div className="cats_indi" onClick={() => showIndi()}>
        Indi
        <img src="img/indi2.jpg" className="indi" alt="Indi" />
      </div>
      <div className="cats_tiger" onClick={() => showTiger()}>
        Tiger
        <img src="img/tiger.jpg" className="tiger" alt="Tiger" />
      </div>
    </section>
  );
};

export default CatsInfo;
