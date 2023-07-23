import React from 'react';
import {Avatar, Box, Typography} from "@mui/material";

export default function DriverCard ({name, surname, image, handleRemove}) {
  return (
    <Box sx={{margin: 2,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: 2,
      display: "flex",
      alignItems: "center",
      borderRadius: 3
    }}>
      <Avatar src={image} sx={{mr: 2}}/>
      <Typography sx={{mr: 1}}>{name}</Typography>
      <Typography>{surname}</Typography>
      <button onClick={handleRemove}>usun kierowce</button>
    </Box>
  )
};
