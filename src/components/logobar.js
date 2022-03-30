import React from 'react';
import blogo from '../Assets/blogo.png';
export default function LogoBar(){
    return(
        <>
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
            <img src={blogo}  height= "50px "alt="" srcset="" />
            <p  style={{fontFamily:"'Quicksand', sans-serif",color:'brown',fontSize:'10px'}}>THE OFFICIAL STUDENT MEDIA BODY OF IIT MANDI</p>
        </div>

        </>
    );
}