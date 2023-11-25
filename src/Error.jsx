import React from "react";

const Error = ()=>{
    return (<>
    <div  style={{display:"flex" , height:"100vh",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
        <img style={{width:"300px"}} src="../src/Images/codingImage.png" alt="" />

        <div style={{fontSize:'4rem' ,fontWeight:'bold' ,color:"white"}}>
            Sorry ! Page Not Found
        </div>
    </div>
    </>)
}
export default Error;