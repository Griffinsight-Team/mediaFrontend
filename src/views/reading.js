import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Home from "./home";
import Box from "@mui/material/Box";
import { Form } from "react-bootstrap";
import { getArticlebyId } from "../service/api";
import parse from "html-react-parser";
import {getPath,containsAnyDigit} from '../store/helper'
import { useLocation } from 'react-router-dom';
import Comment from "../components/comments";
import {PATHS} from '../service/constant';
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
}
export default function Read() {
  const location = useLocation();
  
  const [path,setPath]=useState(getPath(location.pathname))
  const [data, setData] = useState(0);
  useEffect(async () => {
    getArticlebyId(path,(res) => {
      setData(res);
    });
  }, [path]);
 
  if (data!=0) {
    scrollToTop();
    if(data.sno==-1){
      return(<><h1>No Data Found</h1></>);
    }else{
    return (
      <>
      <div>
        <h2 style={{fontFamily: "'DM Serif Display', serif"}}>
        <strong> {data.title}</strong> 
        </h2>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
        <p className="text-muted"> <i> By {data.profile?<> <a href={data.profile} target="_blank" rel="noopener noreferrer">{data.author}</a> </>:<>{data.author} </>}</i></p>
        <p className="text-muted">{data.date}</p>
        </div>
        
        <img width='100%' height ='100%' style={{marginBottom:'10px'}} src={`${PATHS.BASE}${data.thumbnail}`} alt="" />
        
        <div  className='example' style={{width:'inherit' ,overflow: 'auto'}}>
            {parse(data.content)}
        </div>

      </div>
      {/* <Comment/> */}
        
            
      </>
    );}
  } else {
    return (
      <>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </>
    );
  }
}
