import React from 'react';
import {Box, Typography, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";


export default function HomePage() {
  const {t, i18n} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1000px)');


  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "calc(100% - 200px)",
      height: "calc(100vh - 80px)"
    }}>
      <Box sx={{minWidth: 120}}>
      </Box>
      <Typography>Home Page</Typography>
    </Box>
  )
};