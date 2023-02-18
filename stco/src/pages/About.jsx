import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div id={styles.aboutcontainer}>
      <div >
        <div >
          <h2 >OUR MISSION</h2>
          <p>
            "BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE* IN THE WORLD"
          </p>
        </div>
        <img src="https://www.ilyosisa.co.kr/data/photos/202104/227274_121555_4930.jpg" alt="" />
      </div>
      
      <div className="about-nike-part">
        <h2 className="about-nike-heading">About us</h2>
        <p className='about-nike-para'>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work. Based in Beaverton, Oregon, stco,
          Inc. includes the stco, Converse, and Jordan brands.
        </p>
      </div>
    </div>
  );
}

export default About;