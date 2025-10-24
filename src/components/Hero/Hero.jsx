import { ArrowRight } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Smarter Solutions
          <br />
          Powered by AI
        </h1>
        <p className="hero__subtitle">
          Streamline operations, reduce costs, and scale effortlessly with our
          AI-driven tools.
        </p>
        <button className="hero__button">
          Start A Project
          <ArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
