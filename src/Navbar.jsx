import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
    return(
        <>
        <nav >
            <div className="navbar-top">
                <div>Vishnu's Portfolio</div>
                <div className="navbar-top-circle"><i className="fa-solid fa-code fa-md"></i></div>

            {/* <ul className="navbar-logo">
                <li><NavLink to='/'>Dheeraj's Portfolio</NavLink></li>
            </ul> */}
          
            {/* <ul className="navbar-list">
                <li>
                <NavLink to='/'>Home</NavLink>

                </li>
                
                <li><NavLink to='/service'>Service</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul> */}

            </div>
        </nav>
        </>
    )
}

export default Navbar