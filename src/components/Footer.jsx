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
            <h1>Description</h1>
          </div>
          <div>
            <h4>
            Passionate about Full Stack web developer using MERN Stack. And Help Client/Company for business growth.
            <br></br>Motivational Speeker at Youtube and Instagram.
            </h4>
          </div>
       
        </div>
        <div className="footer-contact">
          <div className="footer-porfile-div">
            <h1>Contact</h1>
          </div>
          <div>
            <h4>Vishnu Chaurasiya</h4>
            <h4>+91 7991510913</h4>
            <h4>Zip/Postal Code - 560037</h4>
            <h4>Bengalore, Karnataka</h4>
          </div>
        </div>
        <div className="footer-utility">
          <div className="footer-porfile-div">
            <h1>Languages</h1>
          </div>
          <div>
            <h4>English</h4>
            <h4>Hindi</h4>
            <h4>German</h4>
            <h4>Bhojpuri</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterDetails;
