import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        STEVE DE LA ROSA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/stevewebdesigns/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/steve-delarosa" target="_blank">
          <AiOutlineLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Steve De La Rosa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
