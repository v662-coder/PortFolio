/*completed*/

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddProject from "./AddProject";

const BottomNavbar=()=>{
    const initial = false
    const [isBoxActive ,setBoxActive]=useState(initial)

    

    function showAddBox(){
        
        setBoxActive(!isBoxActive)
        console.log(isBoxActive)


    }




    return(
        <>
        <div className="navbar-bottom">
            {/* <div><i className="fa-thin fa-house"></i></div>
            <i className="fa-thin fa-house"></i> */}

            
        
            <NavLink to='/'><i className="fa-solid fa-house fa-2xl"></i></NavLink>
            <NavLink to='/about'><i className="fa-solid fa-user fa-2xl"></i></NavLink>
            <NavLink to='/contact'><i className="fa-regular fa-address-book fa-2xl"></i></NavLink>
        </div>
        {isBoxActive?<AddProject/>:""}
        <div onClick={showAddBox} className={`navbar-bottom-add-project ${isBoxActive?"bgIcon " :""} `} >
        <i className="fa-sharp fa-solid fa-plus fa-xl"></i>
        </div>
        </>
    )
}

export default BottomNavbar;