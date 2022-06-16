import React, { useState, useEffect } from 'react'; 
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Home from "./home";
import Box from "@mui/material/Box";
import { Form ,Button} from "react-bootstrap";
import { getArticle ,postNewsletter} from '../service/api';
import Alert from '@mui/material/Alert'
import Footer from '../components/footerDesktop';
import {getPath,containsAnyDigit} from '../store/helper'
import { useLocation } from 'react-router-dom';
import Articles from './general';
import Academics from './academics';
import InstiLife from './instiLife';
import Opinion from './opinion';
import SciTech from './sciTech';
import Spotlight from './spotlight';
import Read from './reading';
import Recent from './recent'

import {NotFoundPage}  from './error';
import { useForm } from 'react-hook-form';
import Gallery from './gallery';
import PinnedSideBar from '../components/Articles/pinned';
export default function DesktopMain() {
  const[email,setEmail]=useState('')
  const[name,setName]=useState('')
  const onSubmit = (data) => console.log(data);
  const [message,setMessage]=useState()
  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      "name":e.target[1].value,
      "email": e.target[0].value,
    }
   
    postNewsletter(params,(res)=>{setMessage(res)})
    console.log('You clicked submit.');
    setName('')
    setEmail('')
  }
  
  const location = useLocation();
  let path=getPath(location.pathname);
  
  function renderModule(){
    switch(path){
      case "articles":
        return <Articles/>;
      case "instilife":
        return <InstiLife/>;
      case "spotlight":
        return <Spotlight/>;
      case "academics":
        return <Academics/>;
      case "scitech":
        return <SciTech/>;
      case "opinion":
        return <Opinion/>;
      case containsAnyDigit(path):
        return <Read/>
      default:
        return <NotFoundPage/>
        
    }
  }

  if(1){
    
  return (
    <>
      
    
     
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // padding: "4px",
        }}
      >
        <div
          style={{
            
            height: "100%",
            width: "70%",
            borderRadius: "4px",
          }}
        >
          {message?<Alert onClose={() =>{setMessage()}}>{message}</Alert>:<></>}
          

           {renderModule()}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "28%",
            marginLeft: "10px",
            marginTop: "8px"
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={(e) => setEmail(e.target.value)}  value={email} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control onChange={(e) => setName(e.target.value)}  value={name}  type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="By continuing, you accept the privacy policy" />
                </Form.Group>
                <Button variant="outlined" style={{color:'white',background:'brown' ,border:'none',width:'100%'}} type='submit'>
            Subscribe
            </Button>
              </Form>
            </CardContent>
           
          </Card>
      
          <PinnedSideBar/>
          
    
        </div>
        
      </Container>

      <Container><Footer/></Container>
      
      

     
    </>
  );
        }else{
          return (<>
          <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
          </>);
        }
}
