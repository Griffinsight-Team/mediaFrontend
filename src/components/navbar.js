import React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';



export default function NavBar(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Stack
        style={{borderTop:'1px solid black',borderBottom:'1px solid black', padding:'10px'}}
        direction="row"
        divider={<Divider  orientation="vertical" />}
        spacing={2}>

       <a>link1</a>
       <a>link2</a>
       <a>link3</a>
       <a>link4</a>
       
       
      </Stack>
                
            </div>
        </>
    );
}