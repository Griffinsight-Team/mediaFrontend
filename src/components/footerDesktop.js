import React from "react";
import ReactPlayer from "react-player";
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div style={{display:'flex',justifyContent:'center'}} >
          <ReactPlayer url="https://www.youtube.com/watch?v=LFx_d2d3ZH4" controls={true} />
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <p>Made with ❤️ by techies at Griffinsight</p>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
  <p>© 2022 Griffinsight, IIT Mandi</p>
        </div>
      </div>
      
    </>
  );
}
