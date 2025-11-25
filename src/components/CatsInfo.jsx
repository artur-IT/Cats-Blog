const CatsInfo = () => {
  return (
    // <>
    //   <img src="img/indi2.jpg" className="indi_testy" alt="Indi" />
    // </>
    <section className="cats_info">
      <div className="cats_indi" >
        <img src="img/indi2.jpg" className={`indi`} alt="Indi" />
        <p>Indy</p>
      </div>
      <div className="cats_tiger">
        <img src="img/tiger.jpg" className={`tiger`} alt="Tiger" />
        <p>Tiger</p>
      </div>
    </section>
  );
};

export default CatsInfo;
