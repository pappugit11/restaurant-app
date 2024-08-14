import React, { useState } from "react";
import "./style.css";

const Cards = ({ menuData }) => {
  return (
    <>
      <div className="cards_container">
        {menuData.map(({ id, name, category, image }) => {
          return (
            <div className="cards_outer" key={id}>
              <div className="cards">
                <span className="card_num">{id}</span>
                <h3 className="card_title">{name}</h3>
                <p className="catg">{category}</p>
                <figure className="card_img">
                  <img src={image} alt="" />
                </figure>
                <a href="#url" className="card_link">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
