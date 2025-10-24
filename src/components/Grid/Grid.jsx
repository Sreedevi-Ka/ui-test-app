import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const gridRef = useRef(null);

  useEffect(() => {
    const items = gridRef.current.querySelectorAll(".grid-item");

    // Initial animation on mount
    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

    // Hover animations (add/remove via GSAP)
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });

    // Cleanup listeners
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="grid-container" ref={gridRef}>
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
