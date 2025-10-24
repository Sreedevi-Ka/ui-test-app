import React from "react";
import GridCard from "../GridCard/GridCard";
import logo1 from "../../../public/images/logos/logo1.png";
import logo2 from "../../../public/images/logos/logo2.png";
import logo3 from "../../../public/images/logos/logo3.png";
import logo4 from "../../../public/images/logos/logo4.png";
import logo5 from "../../../public/images/logos/logo5.png";
import "./Grid.scss";

const items = [
  { image: logo1, name: "Logoipsum" },
  { image: logo2 },
  { image: logo3, name: "Logoipsum" },
  { image: logo4, name: "Logoipsum" },
  { image: logo5, name: "Logoipsum" },
];

function Grid() {
  return (
    <div className="grid-container">
      {items.map((item, idx) => {
        const index = idx + 1;
        return (
          <div key={index} className={`grid-item grid-item-${index}`}>
            <GridCard
              image={item.image}
              name={item.name}
              styleClass={`grid-item__logo${index}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(Grid);
