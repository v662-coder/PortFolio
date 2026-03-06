import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import BottomNavbar from "./components/BottomNavbar";
import { ProfileContent, ProfileImage } from "./components/Profile";
import WhatIDo from "./components/WhatIDo";
import ProjectCard from "./components/Project";
import FooterDetails from "./components/Footer";
import Skill from "./components/Skill";

import ProjectData from "./components/ProjectData";
import skillData from "./Data/skillData";

const Home = () => {
  return (
    <>
      <Navbar />
      <BottomNavbar />

      {/* Profile Section */}
      <div className="profile-container">
        <ProfileContent />
        <ProfileImage />
      </div>

      {/* What I Do Section */}
      <WhatIDo />

      {/* Projects Section */}
      <div className="project-container">
        {ProjectData.map((project, index) => (
          <ProjectCard key={index} dataOur={project} />
        ))}
      </div>

      {/* Skills Section */}
      <div className="skill-container">
        <div className="title-container" data-aos="fade-left">
          <h1>Skills</h1>
          <div className="image">
            <img
              src="https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg"
              alt="skills"
            />
          </div>
        </div>

        <div className="all-skill">
          {skillData.map((skill, index) => (
            <Skill key={index} data={skill} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <FooterDetails />
    </>
  );
};

export default Home;