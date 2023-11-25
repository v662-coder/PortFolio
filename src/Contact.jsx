import React ,{useRef, useState} from "react";
import BottomNavbar from "./components/BottomNavbar";
import FooterDetails from "./components/Footer";

const Contact=()=>{
    const [isAnswerActive ,setAnswerActive]=useState(false)

    const questionIconRotate = useRef()
    const handleQuestionIcon=()=>{
        
       
        questionIconRotate.current.classList.toggle("question-icon-active")
        isAnswerActive==false?setAnswerActive(true): setAnswerActive(false)

    }
    return(
        <>
        <div className="contact-container" data-aos='fade-right'>
            <div className="first-container">
                <div className="dictoration-line">

                    <div className="line"></div>
                    <div className="dot"></div>
                </div>
                <div className="title">
                    <h1>Get In Touch</h1>

                </div>
                <div className="desc">
                    <h3> you would like to have a WebApp or Website built by me, please contact me by submitting the form below and I will get back to you as soon as possible.</h3>
                   
                </div>
                <div className="send-email">
                    <h2>Send me a message !</h2>
                    <h3>Email : vishnuchaurasiya1101@gmail.com</h3>
                    <h3>Phone: +91-7991510913 , 7071181677</h3>
                </div>
                <div className="send-email">
                    <h2> Parmanent Adress :</h2>
                    <h3>Sahasi Post-Hardi Chak , Khajani, Gorakhpur, Uttar Pradesh - 273406</h3>
                </div>

            </div>
            
                

            <div className="second-container" data-aos='fade-right'>
            <div className="input-field">
                <input type="text" name="name" id="name" placeholder="name" />
            </div>
            <div className="input-field">
                <input type="email" name="email" id="email" placeholder="email"/>
            </div>
            <div className="input-field">
                <input type="phone" name="phone" id="phone" placeholder="phone number" />
            </div>
            <div className="input-area">
                <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
            </div>
            <div className="button-field">
                <button>send</button>
            </div>

            </div>
        </div>
        <div className="question-container" data-aos='fade-right'>
            <div className="question-title">
                <h1>Have any Question ?</h1>
            </div>
            <div className="question" onClick={handleQuestionIcon}>
                <div className="question-1">
                    <h1>When are you Graduate ? </h1>

                </div>
                <div className="question-icon"   >
                    <i  className="fas fa-plus"  ref={questionIconRotate}></i>
                </div>
                
            </div>
            {
                isAnswerActive?<div className="answer">
                    I am Graduate from Rajiya Engineering College Banda in Information Technology, Which is 
                    affiliated to Dr. A P J Abdul Kalam Technical University, Lucknow in 2023 . I am professional web Developer and Currently Looking for a Job.
                </div>:""

            }
        </div>
        <FooterDetails/>
        <BottomNavbar/>
        </>
    )
}
export default Contact;