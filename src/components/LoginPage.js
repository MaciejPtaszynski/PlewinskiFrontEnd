import React, {useState} from 'react';
import { useAuth } from '../context/authContext/AuthContext';
import { Box, Button, TextField, Typography } from "@mui/material";
import Img from "../assetss/pexels-albin-berlin-906982.jpg";
import Logo from "../assetss/logotyp_plewinski.png"
import { display, padding } from '@mui/system';

export default function LoginPage() {

  const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email);
  };

  const container = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };
  
  const formWrapper = {
    backgroundColor: "whitesmoke",
    width: "600px",
    height: "100vh",
    display: "flex",
    flexDirection:"column", 
    alignItems:'center',
    justifyContent:"center"
  };
  
  const logo = {
    width: "100%",
    height: "200px",
    marginBottom: 30
  };
  
  const input = {
    width: "100%",
    minWidth: "550px",
    margin: "20px 0"
  };
  
  return (
    <Box style={container}>
      <Box style={formWrapper}>
        <img style={logo} src={Logo} />
        <Box sx={{width: "90%"}}>
          <h2 style={{fontStyle: "italic"}}>Delivering your goods to your destinations.</h2>
          <h4 style={{marginBottom:"-10px"}}>We are offering wide variety of delivery services tailored to your specific needs.</h4>
          <h4>Please login and let us know how we can help, we are looking to hear from you soon.</h4>
        </Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            primary
            id="outlined-required"
            label="email"
            // defaultValue=""
            main="#212121"
          />
          <TextField
            style={input}
            required
            id="outlined-required"
            label="password"
            defaultValue=""
          />
        </Box>
        <Box sx={{ display:"flex", flexDirection:"column", textAlign:"center",alignItems:"center"}}>
          <Button onClick={ handleLogin } variant="outlined" >
            login
          </Button>
          <Typography sx={{margin:"20px 0",width: "80%"}}>if you do not have an account please</Typography>
          <Button onClick={ handleLogin } variant="outlined">
            register
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
