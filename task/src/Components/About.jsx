/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";
import img2 from "../images/aboutbg2.avif";


const imageAltText = "Texture background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Mechanical Enginnering Graduate passed from Aligarh Muslim University, I want to switch my carrer in Web development Field. A motivated and detail-oriented front-end developer with a strong foundation in web development technologies, including HTML, CSS, JavaScript, and React.";
  

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACTJS",
  "TAILWIND CSS",
  "BOOTSTRAP",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  // "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";
  "Eager to apply knowledge in designing responsive, user-friendly websites and web applications. Possesses hands-on experience in developing projects during coursework, internships, or personal initiatives. Strong problem-solving skills, a keen eye for design, and the ability to collaborate effectively in team environments.";
  

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={img2} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
