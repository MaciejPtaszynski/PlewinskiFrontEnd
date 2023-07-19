import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SidebarNavigator from "./SidebarNavigator";
import HomePage from "./HomePage";
import DriversPage from "./DriversPage";
import SettingsPage from "./SettingsPage";
import Header from "./Header";
import {Box} from "@mui/material";

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <SidebarNavigator/>
      <Box sx={{display: "flex", justifyContent: "flex-end"}}>
        <Header/>
      </Box>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'drivers'} element={<DriversPage/>}/>
        <Route path={'settings'} element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}