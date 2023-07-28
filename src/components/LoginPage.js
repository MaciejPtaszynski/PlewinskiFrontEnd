import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import Img from "../assetss/pexels-albin-berlin-906982.jpg";
import Logo from "../assetss/logotyp_plewinski.png"
import { display } from '@mui/system';

export default function LoginPage({ handleClick }) {

  const container = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    
    

  }
  const formWrapper = {
    backgroundColor: "whitesmoke",
    width: "600px",
    height: "100vh",
  }
  const logo = {
    width: "100%",
    height: "200px",
    marginBottom: 200
  }
  const input = {
    width: "80%",
    margin: "20px 0"
  }
  return (
    <Box style={container}>
      <Box style={formWrapper}>
      <img style={logo} src={Logo}/>
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column"}}>
          <TextField
            style = {input}
            width= "100%"
            size= "m"
            required
            id="outlined-required"
            label="Wymagane"
            defaultValue="mail"
          />
          <TextField
          style = {input}
            required
            id="outlined-required"
            label="Wymagane"
            defaultValue="password"
          />
        </Box>
        <Box>
          <Button onClick={(handleClick)} variant="outlined">
            login
          </Button>
          <Button onClick={(handleClick)} variant="outlined">
            register
          </Button>
        </Box>
      </Box>



    </Box>





  )
}
