import React from "react";
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import {NavLink,Link} from "react-router-dom";
import LogoBar from './logobar';
import SearchBar from './searchBox';
import {FIELDS} from '../store/helper'
import {getPath} from '../store/helper'
import { useLocation } from 'react-router-dom';

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
}
export default function APPbar(){
  const location = useLocation();
  let path=getPath(location.pathname);
  
  return(
    <>
    <Navbar className='navbar'  expand="lg">
  <Container  >
    <LogoBar/>
    
    <Navbar.Toggle style={{background:'white'}} aria-controls="navbarScroll" />
    <Navbar.Collapse  id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',marginRight:'1%',marginLeft:'auto'}}
        navbarScroll
      >
         
        {FIELDS.map((fields) => (
          
          <NavLink  key={fields.name} onClick={()=>scrollToTop()}
          style={
            fields.path.includes(path)
              ? {

                fontSize:'18px',
                color: "#ffffff",
                fontWeight: "bold",
                color:'black',
                borderBottom:'2px solid green'
              }
              : {color:'black',}
          }
            className= 'link'
            to={fields.path}
          >
           
            {fields.name}
          </NavLink>

        ))}
       
        
      </Nav>
      
      <SearchBar/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}