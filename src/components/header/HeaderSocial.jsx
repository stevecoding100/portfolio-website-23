import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/steve-delarosa" target="_blank">
        <BsLinkedin title="linkedin" />
      </a>
      <a
        href="https://github.com/stevecoding100"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub title="github" />
      </a>
      <a
        href="https://www.behance.net/stevedelarosa"
        target="_blank"
        rel="noreferrer"
      >
        <FaBehanceSquare title="behance" />
      </a>
    </div>
  );
};

export default HeaderSocial;
