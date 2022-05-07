import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Home from "./home";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from 'react'; 
import { getRECENT ,postNewsletter} from '../service/api';
import {NavLink} from "react-router-dom";
export default function RecentPost(){
    const [data, setData] = useState([]);
    useEffect(async()=>{getRECENT((res)=>{setData(res.results)}); },[setData])
    return(
        <>
        <Card sx={{ marginTop:'20px', minWidth: 275 }}>
            <CardContent>
              <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
              <Button variant="outlined" style={{color:'brown'}} disabled>
            Recent Post
            </Button>
              </div>
              <div style={{display:"flex" ,flexDirection:'column',padding:'10px'}}>
              {data.map((item)=>(
              <>
              <a href={`/${item.sno}`} style={{color:'black',textDecoration:'None'}}>
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