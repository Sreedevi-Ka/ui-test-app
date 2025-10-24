import "./Footer.scss";
import instagram from "../../../public/images/icons/instagram.png";
import facebook from "../../../public/images/icons/facebook.png";
import linkedin from "../../../public/images/icons/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={instagram} alt="Icon" />
        <img src={facebook} alt="Icon" />
        <img src={linkedin} alt="Icon" />
      </div>

      <div className="footer-center">
        <p>Lorem Ipsum Lorem Ipsum</p>
      </div>

      <div className="footer-right">
        <p>© TechwareLab copyrights</p>
      </div>
    </footer>
  );
}

export default Footer;
