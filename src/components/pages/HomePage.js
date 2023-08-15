import React from 'react';
import {Box, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";


export default function HomePage() {
  const {t, i18n} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1000px)');
  
  return (
    <Box >
      
    </Box>
  )
};
