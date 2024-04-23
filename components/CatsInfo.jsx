const CatsInfo = () => {
  const showIndi = () => document.querySelector(".indi").classList.add("indi_show");
  const showTiger = () => document.querySelector(".tiger").classList.add("tiger_show");

  const hideIndi = () => document.querySelector(".indi").classList.remove("indi_show");
  const hideTiger = () => document.querySelector(".tiger").classList.remove("tiger_show");

  return (
    <section className="cats_info">
      <div className="cats_indi" onMouseEnter={showIndi} onMouseOut={hideIndi}>
        <img src="img/indi2.jpg" className="indi" alt="Indi" />
      </div>
      <div className="cats_tiger" onMouseEnter={showTiger} onMouseOut={hideTiger}>
        <img src="img/tiger.jpg" className="tiger" alt="Tiger" />
      </div>
    </section>
  );
};

export default CatsInfo;
