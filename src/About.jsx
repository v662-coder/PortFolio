import React from "react";
import BottomNavbar from "./components/BottomNavbar";
import FooterDetails from "./components/Footer";
import { ProfileContent, ProfileImage } from "./components/Profile";
import WhatIDo from "./components/WhatIDo";

const About=()=>{
    return(
        <>
       
        <div className='profile-container'>
        <ProfileContent/>
        <ProfileImage/>
        </div>

        <WhatIDo/>
        
        <BottomNavbar/>
        <FooterDetails/>
        </>
    )
}
export default About;