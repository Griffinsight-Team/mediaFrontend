import React, { useState, useEffect } from 'react'; 
import {Button,NavLink} from 'react-bootstrap';
import SpotlightWatch from './spotlightWatch';
import SpotlightRead from './spotlightRead';

export default function Spotlight(){
    const[read,setRead]=useState(true);

    return(
      <>
      <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',marginBottom:'10px'}}>
          <NavLink style={read?{background:'white',color:'black',border:'none',borderBottom:'2px solid green',borderRadius:'0',fontWeight:'bold'}:{background:'white',color:'black',border:'none',borderRadius:'0',fontWeight:'bold'}} onClick={()=>{setRead(true);}} >Spotlight Read</NavLink>
          <NavLink style={!read?{background:'white',color:'black',border:'none',borderBottom:'2px solid green',borderRadius:'0',fontWeight:'bold'}:{background:'white',color:'black',border:'none',borderRadius:'0',fontWeight:'bold'}} onClick={()=>{setRead(false);}}>Spotlight Watch</NavLink>
        
      </div>
      {read?<SpotlightRead></SpotlightRead>:<SpotlightWatch></SpotlightWatch>}
    
      
      </>  
    );
}