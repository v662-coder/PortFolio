import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="footer-container" data-aos="fade-left">
        <div className="footer-profile-details">
          <div className="footer-porfile-div">
            <h1>About Me</h1>
          </div>
          <div>
            <h4>
              I am Vishnu Chaursiya, a passionate Full Stack Developer
              specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js).
              I have experience building scalable web applications, real-time platforms,
              and user-focused solutions.
              <br /><br />
              I have worked on projects like job marketplaces, ed-tech platforms,
              and social productivity systems, focusing on performance optimization,
              secure authentication, and responsive UI design.
              <br /><br />
              I enjoy solving complex problems, learning new technologies,
              and building products that help businesses grow and users achieve their goals.
            </h4>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-porfile-div">
            <h1>Contact</h1>
          </div>
          <div>
            <h4>Vishnu Chaursiya</h4>
            <h4>+91 7991510913</h4>
            <h4>Gorakhpur, Uttar Pradesh</h4>
            <h4>India</h4>
          </div>
        </div>

        <div className="footer-utility">
          <div className="footer-porfile-div">
            <h1>Languages</h1>
          </div>
          <div>
            <h4>English</h4>
            <h4>Hindi</h4>
            <h4>Bhojpuri</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDetails;