import React, { useRef, useState } from "react";
import BottomNavbar from "./components/BottomNavbar";
import FooterDetails from "./components/Footer";

const Contact = () => {

  const [showGradAnswer, setShowGradAnswer] = useState(false);
  const [showExpAnswer, setShowExpAnswer] = useState(false);

  const gradIcon = useRef();
  const expIcon = useRef();

  const handleGradQuestion = () => {
    gradIcon.current.classList.toggle("question-icon-active");
    setShowGradAnswer(!showGradAnswer);
  };

  const handleExpQuestion = () => {
    expIcon.current.classList.toggle("question-icon-active");
    setShowExpAnswer(!showExpAnswer);
  };

  return (
    <>
      <div className="contact-container" data-aos="fade-right">

        {/* LEFT SIDE */}
        <div className="first-container">

          <div className="dictoration-line">
            <div className="line"></div>
            <div className="dot"></div>
          </div>

          <div className="title">
            <h1>Get In Touch</h1>
          </div>

          <div className="desc">
            <h3>
              If you are looking for a Full Stack Developer who can build modern,
              scalable and responsive web applications using React.js, Node.js,
              Express.js, MongoDB or Vue.js, feel free to contact me.
              I would love to collaborate and help grow your business through technology.
            </h3>
          </div>

          <div className="send-email">
            <h2>Contact Details</h2>
            <h3>Email : vishnuchaurasiya1101@gmail.com</h3>
            <h3>Phone : +91 7991510913</h3>
            <h3>Location : Gorakhpur, Uttar Predesh</h3>
          </div>

          <div className="send-email">
            <h2>Permanent Address</h2>
            <h3>
              Sahasi Post-Hardi Chak, Khajani, Gorakhpur,
              Uttar Pradesh - 273406
            </h3>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="second-container" data-aos="fade-left">

          <div className="input-field">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-field">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-field">
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="input-area">
            <textarea rows="8" placeholder="Write your message"></textarea>
          </div>

          <div className="button-field">
            <button>Send Message</button>
          </div>

        </div>

      </div>

      {/* FAQ SECTION */}

      <div className="question-container" data-aos="fade-right">

        <div className="question-title">
          <h1>Have Any Question?</h1>
        </div>

        {/* Graduation Question */}

        <div className="question" onClick={handleGradQuestion}>

          <div className="question-1">
            <h1>When did you graduate?</h1>
          </div>

          <div className="question-icon">
            <i className="fas fa-plus" ref={gradIcon}></i>
          </div>

        </div>

        {showGradAnswer && (
          <div className="answer">
            I completed my B.Tech in Information Technology from
            Rajkiya Engineering College Banda, affiliated with
            Dr. A.P.J. Abdul Kalam Technical University, Lucknow in 2023.
            I am a passionate Full Stack Developer specializing in the MERN stack.
          </div>
        )}

        {/* Experience Question */}

        <div className="question" onClick={handleExpQuestion}>

          <div className="question-1">
            <h1>Do you have professional experience?</h1>
          </div>

          <div className="question-icon">
            <i className="fas fa-plus" ref={expIcon}></i>
          </div>

        </div>

        {showExpAnswer && (
          <div className="answer">
            Yes, I have around 2 years of professional experience as a
            Full Stack Developer at Agami Technology, Noida.

           I have worked on scalable applications like Nediaz (Job Marketplace Platform) and Schezy (School Management System) using React.js, Node.js, Express.js, and MongoDB
          </div>
        )}

      </div>

      <FooterDetails />
      <BottomNavbar />

    </>
  );
};

export default Contact;