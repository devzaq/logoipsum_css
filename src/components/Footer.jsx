import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
  library.add(fab);
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src="./assets/images/logo.png" alt="app logo" />
          <p>
            Empowering the next generation of learners with innovative
            educational solutions.
          </p>
          <button className="footer__button">Learn More</button>
        </div>
        <div className="footer__links">
          <div className="footer__columns">
            <h4>Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Programs</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer__columns">
            <h4>Resources</h4>
            <a href="#">Help Center</a>
            <a href="#">Tearms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer__columns social">
            <h4>Connect with us</h4>

            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2026 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
