import { useState } from "react";

const CatsInfo = () => {
  const [showIndi, setShowIndi] = useState(false);
  const [showTiger, setShowTiger] = useState(false);

  return (
    <section className="cats_info">
      <div className={`cats_indi`} onMouseEnter={() => setShowIndi(true)} onMouseOut={() => setShowIndi(false)}>
        <img src="img/indi2.jpg" className={`indi ${showIndi ? "indi_show" : ""}`} alt="Indi" />
      </div>
      <div className="cats_tiger" onMouseEnter={() => setShowTiger(true)} onMouseOut={() => setShowTiger(false)}>
        <img src="img/tiger.jpg" className={`tiger ${showTiger ? "tiger_show" : ""}`} alt="Tiger" />
      </div>
    </section>
  );
};

export default CatsInfo;
