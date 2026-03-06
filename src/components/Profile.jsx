import React from "react";
import { NavLink } from "react-router-dom";

const ProfileContent = () => {
  return (
    <>
      <div className="profile-container-content" data-aos="fade-right">
        <div className="dictoration-line">
          <div className="line"></div>
          <div className="dot"></div>
        </div>

        <div className="profileName">
          <h1>Hello, I'm Vishnu Chaursiya – Full Stack Developer (MERN)</h1>
        </div>

        <div>
          <h4>
            I am a passionate Full Stack Developer specializing in the MERN
            Stack (MongoDB, Express.js, React.js, Node.js). I enjoy building
            scalable, user-friendly, and high-performance web applications.
            <br /><br />
            I have experience developing modern web platforms including job
            marketplaces, productivity tools, and learning platforms. My focus
            is on creating clean UI, secure backend APIs, and optimized
            performance to deliver the best user experience.
          </h4>
        </div>

        <div className="profile-btn">
          <NavLink to="/contact">
            <button>
              Get In Touch <i className="fa-solid fa-arrow-right"></i>
            </button>
          </NavLink>

          <NavLink to="/about">
            <button>
              About Me <i className="fa-solid fa-user"></i>
            </button>
          </NavLink>

          <button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Et9ZDlgSy_x14TyON5BayiQRb7Uk-AXM/view?usp=sharing"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

const ProfileImage = () => {
  return (
    <>
      <div className="profile-container-image" data-aos="fade-left">
        <div className="profile-image"></div>

        <div className="contact-link">
          <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/vishnu-chaurasiya-5948291b2">
            <div className="div-1">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://github.com/v662-coder">
            <div className="div-2">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/VishnuC69839993">
            <div className="div-3">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vishnu_1210_/">
            <div className="div-4">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vishnu.chaurasiya.5011">
            <div className="div-5">
              <i className="fa-brands fa-facebook"></i>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCe07GAKsanc1wD-sP4TUryg">
            <div className="div-6">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export { ProfileContent, ProfileImage };