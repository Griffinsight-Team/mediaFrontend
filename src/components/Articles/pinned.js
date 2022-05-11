import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button} from 'react-bootstrap'
import Box from "@mui/material/Box";
import React, { useState, useEffect } from 'react'; 
import { getPinned } from "../../service/api";
import {NavLink} from "react-router-dom";
export default function PinnedSideBar(){
    const [data, setData] = useState([]);
    useEffect(async()=>{getPinned((res)=>{setData(res)}); },[setData])
    
    return(
        <>
        <Card sx={{ marginTop:'20px', minWidth: 275 }}>
            <CardContent>
              <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
              <div style={{color:'white',background:'brown',textAlign:'center',borderRadius:'4px',padding:'5px'}} >
            Pinned Articles
            </div>
              </div>
              <div style={{display:"flex" ,flexDirection:'column',padding:'10px'}}>
              {data.map((item)=>(
              <>
              <a href={`/${item.sno}`} style={{color:'black',textDecoration:'None'}} key={item.sno}>
              <Button variant="outlined" style={{color:'black', border:'none'}} >
              {item.title}
            </Button>
            </a>
              </>
              

           ))}

              </div>
              
            </CardContent>
           
          </Card>
        </>
    );
}