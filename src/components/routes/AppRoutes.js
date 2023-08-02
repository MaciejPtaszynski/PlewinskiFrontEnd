import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SidebarNavigator from "../navigation/SidebarNavigator";
import HomePage from "../pages/HomePage";
import DriversAndCarsPage from "../pages/DriversAndCarsPage";
import SettingsPage from "../pages/SettingsPage";
import Header from "../Header";
import {Box} from "@mui/material";

export default function AppRoutes({handleClick}) {
  return (
    <BrowserRouter>
      <SidebarNavigator/>
      <Box sx={{display: "flex", justifyContent: "flex-end"}}>
        <Header handleLogout={handleClick}/>
      </Box>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'drivers'} element={<DriversAndCarsPage/>}/>
        <Route path={'settings'} element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}