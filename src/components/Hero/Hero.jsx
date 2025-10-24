import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Component with Animations
const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const circlesRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - staggered fade in with upward motion
      gsap.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 1,
          ease: "back.out(1.7)",
        }
      );

      // Circles animation - sequential appearance
      circlesRef.current.forEach((circle, index) => {
        gsap.fromTo(
          circle,
          { opacity: 0, scale: 0 },
          {
            opacity: 0.6,
            scale: 1,
            duration: 1.5,
            delay: 0.3 + index * 0.2,
            ease: "power2.out",
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="hero">
      {/* Animated concentric circles with parallax */}
      <div className="hero__circles">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => (circlesRef.current[i - 1] = el)}
            className={`hero__circle hero__circle--${i}`}
            style={{
              transform: `translate(${mousePos.x * (5 - i) * 3}px, ${
                mousePos.y * (5 - i) * 3
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <h1 ref={titleRef} className="hero__title">
          <span>Smarter Solutions</span>
          <br />
          <span>Powered by AI</span>
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
    </div>
  );
};
export default Hero;
