import React from "react";

import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from"./Home"
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'
import Navbar from './Navbar';
import{BrowserRouter,Routes ,Route} from 'react-router-dom';
import {ProfileContent,ProfileImage} from './components/Profile'
import ProjectCard from './components/Project'
import FooterDetails from './components/Footer'
import BottomNavbar from './components/BottomNavbar'
import Skill from './components/Skill'
import ProjectData from "./components/ProjectData";
import WhatIDo from "./components/WhatIDo";
import skillData from "./Data/skillData";


const Home=()=>{
   


    return(
        <>
        <Navbar/>
        <BottomNavbar/>
        
        <div className='profile-container'>
        <ProfileContent/>
        <ProfileImage/>  
        </div>

        <WhatIDo/>
        <div className='project-container'>              

        {ProjectData.map(function ncard(val,i){
            return(
                <ProjectCard key={i}
                dataOur = {val}/>
            )
        })}



{/* 
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/> */}
        </div>
        

        <div className='skill-container'>
            <div className="title-container" data-aos="fade-left">
                    <h1>Skills</h1>
                    <div className="image">
                        <img src="https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg" alt="" />
                    </div>
            </div>
            <div className="all-skill">

                {
                    skillData.map((value,index)=>{
                        return(<Skill data={value} />)
                    })
                }

               
            </div>
            

        </div>
        <FooterDetails/>


        </>
    )
}
export default Home;