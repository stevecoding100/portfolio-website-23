import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets-portfolio/me.png";
import HeaderSocial from "./HeaderSocial";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h1>Steve De La Rosa</h1>
        <h1>I am a Front-End Developer</h1>
        <h5 className="text-light">
          I like to build amazing UI/UX experiences for humans 😌. Currently, I
          am focused on creating
          <span class="bold__text">
            {" "}
            Usable, Equitable, and Accessible
          </span>{" "}
          applications 👨🏼‍💻.
        </h5>
        <CTA />
        <HeaderSocial />
        {/* ==== Profile Image === */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {/* End  */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
