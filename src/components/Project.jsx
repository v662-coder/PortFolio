import React from "react";

const ProjectCard=(props)=>{
    return(
        <>
        <div className="project-card" data-aos="fade-up">
        <div className="project-card-img">
            <img src={props.dataOur.projectImage} alt="" />
        </div>
        <div className="project-card-about">
            <div className="project-card-title">
                <div className="project-card-title-name">
                    <h1>{props.dataOur.projectName}</h1>
                </div>
                <div className="project-card-title-skill">
                    <h3>{props.dataOur.language}</h3>
                </div>
            </div>
            <div className="project-card-desc">
                <h4>{props.dataOur.disc}</h4>
            </div>
            <div className="porject-card-btn">
                <a target="_blank" href={props.dataOur.url}><button>View Project <i class="fa-solid fa-eye fa-l"></i></button>
                </a>
            </div>
        </div>
        
        
        </div>
        </>
    )
}


export default ProjectCard ;