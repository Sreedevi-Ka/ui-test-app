import React from "react";
import "./GridCard.scss";

const GridCard = ({ image, name, bgColor, styleClass }) => {
  return (
    <div className="grid-card" style={{ backgroundColor: bgColor }}>
      <figure className={{ styleClass }}>
        <img src={image} alt={name} className="grid-card__image" />
        {name && <figcaption className="grid-card__name">{name}</figcaption>}
      </figure>
    </div>
  );
};

export default GridCard;
