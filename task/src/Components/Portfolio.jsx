/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import img3 from "../images/comp.avif";

const imageAltText = "laptop with workable environment";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Weather App",
    description:
      "I have developed real time weather app which allows the user to check weather of any city, search for city & you will get detailed weather report in a sleek & user-friendly interface.",
    url: "https://alimdfaiz.github.io/weather-clone/",
  },
  {
    title: "Blinkit-clone ",
    description:
      "Developed a high-performance and responsive grocery ordering app, which is a cloned version of the Blinkit grocery shopping app with added features and showcasing proficiency",
    url: "https://alimdfaiz.github.io/blinkit-clone/",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created By ReactJs and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://alimdfaiz.github.io/portfolio-faiz/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Landing Page for a Restaurant, using HTML, CSS, and basic JavaScript.",
    url: "https://alimdfaiz.github.io/Task1/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={img3}
            style={{ height: "90%", width: "100%", objectFit: "cover", marginLeft:"70px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
