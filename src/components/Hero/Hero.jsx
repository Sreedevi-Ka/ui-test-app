import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import "./Hero.scss";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    // GSAP animations for text entrance
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 50,
    });

    // Animate text elements with stagger
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Animate circles sequentially
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        gsap.fromTo(
          circle,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: 0.5 + index * 0.2,
            ease: "power2.out",
          }
        );
      }
    });

    // Mouse move handler for parallax effect
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        setMousePosition({ x, y });

        // Parallax effect for circles
        circlesRef.current.forEach((circle, index) => {
          if (circle) {
            const speed = (index + 1) * 0.5;
            gsap.to(circle, {
              x: x * (20 * speed),
              y: y * (10 * speed),
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__circles">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i - 1] = el)}
            className={`circle circle-${i}`}
          />
        ))}
      </div>

      <div className="hero__content">
        <h1 ref={titleRef} className="hero__title">
          Smarter Solutions
          <br />
          Powered by AI
        </h1>
        <p ref={subtitleRef} className="hero__subtitle">
          Streamline operations, reduce costs, and scale effortlessly with our
          AI-driven tools.
        </p>
        <button ref={buttonRef} className="hero__button">
          Start A Project
          <ArrowRight className="icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
