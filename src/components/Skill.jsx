import React from "react";

const Skill = (props) => {
  var { icon, skill, rating , percentage ,color } = props.data;
  
  let val= 170-((170*percentage)/100);

  return (
    <>
      <div className="skill-container-card" data-aos="fade-up">
        <div>
          <div className="title"></div>
          <div className="skill-icon">
            <i className={icon}></i>
          </div>
          <div className="skill-title">
            <h1>{skill}</h1>
          </div>
          <div className="skill-disc">
            <h4>{rating}</h4>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", right: "18px" ,top:"20px" ,fontSize:"1.4rem" ,fontWeight:"bold" ,color:`${color}` }}>{percentage}%</div>
          <svg height="60px" width="60px">
            <circle
              style={{
                stroke: `${color}`,
                strokeWidth: "5px",
                fill: "none",
                strokeDasharray: "170",
                strokeDashoffset: `${val}`,
              }}
              cx="30"
              cy="30"
              r="27"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Skill;