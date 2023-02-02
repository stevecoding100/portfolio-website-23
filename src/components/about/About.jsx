import React from "react";
import "./about.css";
import ME from "../../assets-portfolio/me-about.jpg";

import { MdOutlineComputer } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card">
              <MdOutlineComputer className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            👨🏼‍💻 I've been designing and coding for 2 year. I am a UX/UI designer
            and junior front end developer who loves building applications &
            learning new technologies. When I'm not coding, I enjoy quality time
            with family, friends, and do some creative activities such as:
            Photography 📷 , Music 🎶, and Podcast 🎙️.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
