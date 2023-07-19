import React from 'react';
import {Box, Typography, useMediaQuery} from "@mui/material";
import {useDrawer} from "../context/drawerContext/DrawerContext";

export default function SettingsPage() {
  const {toggleDrawer} = useDrawer();
  const isMobile = useMediaQuery('(max-width: 1000px)');

  return (
    <Box sx={{
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Typography>Settings</Typography>
      {isMobile && <button onClick={toggleDrawer}>open drawer</button>}
    </Box>
  )
};