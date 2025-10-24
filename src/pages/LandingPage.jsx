import LogoWrapper from "../components/LogoWrapper/LogoWrapper";
import "../styles/main.scss";
import Grid from "../components/Grid/Grid";
import Footer from "../components/Footer/Footer";
import TextContent from "../components/TextContent/TextContent";
import Hero from "../components/Hero/Hero";

const LandingPage = () => {
  return (
    <div className="ai-landing">
      <Hero />
      <div className="container">
        <TextContent />
        <Grid />
      </div>
      <LogoWrapper />
      <Footer />
    </div>
  );
};

export default LandingPage;
