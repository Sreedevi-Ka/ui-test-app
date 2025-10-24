import React, { useEffect, useRef } from "react";
import logo6 from "../../../public/images/logos/logo6.png";
import logo7 from "../../../public/images/logos/logo7.png";
import logo8 from "../../../public/images/logos/logo8.png";
import "./LogoWrapper.scss";
import gsap from "gsap";

const LogoWrapper = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // Create the animation
    const animation = gsap.to(track, {
      x: "-50%",
      duration: 25,
      ease: "none",
      repeat: -1,
      paused: false,
    });

    // Add hover handlers to the track
    const handleMouseEnter = () => {
      animation.pause();
    };

    const handleMouseLeave = () => {
      animation.resume();
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    // Start the animation
    animation.play();

    // Cleanup
    return () => {
      animation.kill();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const logos = [logo6, logo7, logo8];

  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="logo-wrapper">
      <div ref={trackRef} className="logo-track">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWrapper;
