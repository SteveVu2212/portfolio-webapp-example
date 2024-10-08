import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Steve</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100006745180544"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/steve-vu-09998312b/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            target="_blank"
            href="https://twitter.com/TuVu25143373"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Steve Vu. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
