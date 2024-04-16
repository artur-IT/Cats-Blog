const CatsInfo = () => {
  return (
    <section className="cats_info">
      <div className="cats_indi" onClick={() => console.log("Indi")}>
        Indi
      </div>
      <div className="cats_tiger" onClick={() => console.log("Tiger")}>
        Tiger
      </div>
    </section>
  );
};

export default CatsInfo;
