import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research & Strategy</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customer Journey Mapping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframe + Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Testing + Iteration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Design</p>
            </li>
          </ul>
        </article>
        {/* End OF UI/UX */}
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma to Responsive website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design to Responsive website using React Js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Page Or one page website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Api integration </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Designing and Redesigning of existing websites </p>
            </li>
          </ul>
        </article>
        {/*  END WEB DEVELOPMENT */}
        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing, reviewing, editing, and updating content for company
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducting research and interviews to learn more about current
                trends
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring social media and company website metrics</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilizing SEO methods to increase site traffic</p>
            </li>
          </ul>
        </article>
        {/*  END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
