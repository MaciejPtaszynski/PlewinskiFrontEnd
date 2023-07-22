import React from 'react';
import {Box} from "@mui/material";


export default function LoginPage ({handleClick}) {

  return (
       <Box>
        <button onClick={handleClick}>
          logoin
        </button>
        <button onClick={handleClick}>
          logout
        </button>
      </Box>


  )
}
