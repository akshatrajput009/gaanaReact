import React from "react";

const Cardslist = () => {
  return (
    <div className="cards-item">
      <img src={require("../ASSETS/images/hamsafar.jpg")} alt="hamsafar" />
      <p>Hamsafar</p>

      <div className="play-btn"></div>
    </div>
  );
};

export default Cardslist;
