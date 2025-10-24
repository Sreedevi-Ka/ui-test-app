import React from "react";
import logo6 from "../../../public/images/logos/logo6.png";
import logo7 from "../../../public/images/logos/logo7.png";
import logo8 from "../../../public/images/logos/logo8.png";
import "./LogoWrapper.scss";

function LogoWrapper() {
  const logos = [logo6, logo7, logo8];


  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="logo-wrapper">
      <div className="logo-track">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoWrapper;
