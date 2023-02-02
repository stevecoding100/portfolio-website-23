import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets-portfolio/ecommerce-app.jpg";
import IMG2 from "../../assets-portfolio/robot-joke.jpg";
import IMG3 from "../../assets-portfolio/infinite-scroll.jpg";
import IMG4 from "../../assets-portfolio/dog-api.jpg";
import IMG5 from "../../assets-portfolio/chew.jpg";
import IMG6 from "../../assets-portfolio/jarrive.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce Website",
    github: "https://github.com/stevecoding100/ecommerce-site",
    demo: "https://ecommerce-app-23.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Joke Teller App",
    github: "https://github.com/stevecoding100/joke-teller-app",
    demo: "https://joke-teller1.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Infinite Unsplash Scroll App",
    github: "https://github.com/stevecoding100/infinite-scroll-app",
    demo: "https://infinity-scroll1.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dog API Fetch",
    github: "https://github.com/stevecoding100/dog-fetch-api",
    demo: "https://dog-fetch-api.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    github: "#",
    title: "UX/UI - Chew - Case Study",
    demo: "https://www.behance.net/gallery/144488887/Chew-Pet-Food-Mobile-App",
  },
  {
    id: 6,
    image: IMG6,
    title: "UX/UI - J'ARRIVE - Case Study",
    github: "#",
    demo: "https://www.behance.net/gallery/142615535/J-ARRIVE-Case-Study",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
