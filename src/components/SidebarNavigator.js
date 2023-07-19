import React, {useState} from 'react';
import {Box, Drawer, Typography, useMediaQuery} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";
import {useDrawer} from "../context/drawerContext/DrawerContext";
import {useTranslation} from "react-i18next";


export default function SidebarNavigator() {
  const {t} = useTranslation();
  const {isDrawerOpen, toggleDrawer} = useDrawer();
  const isMobile = useMediaQuery('(max-width: 1000px)');
  const [selectedButton, setSelectedButton] = useState("home");
  const handleSelectedButton = (item) => {
    setSelectedButton(item)
  };

  const logo = {
    fontSize: "1.75rem",
    textAlign: "center",
    marginTop: 10
  };

  const navContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const iconWrapperActive = {
    display: 'flex',
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    textDecoration: "none",
    backgroundColor: "#fff"
  };

  const iconWrapper = {
    display: 'flex',
    width: 150,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 2,
    margin: 10,
    elevation: 5,
    textDecoration: "none"
  };

  const iconStyleActive = {
    width: 30,
    height: 30,
    marginRight: 20,
    padding: 5,
    boxShadow: "none",
    color: "#cb0b9e"
  };

  const iconStyle = {
    width: 30,
    height: 30,
    marginRight: 20,
    padding: 5,
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    borderRadius: 10,
    color: "grey"
  };

  const iconText = {
    color: "grey",
  };

  const iconTextActive = {
    color: "black"
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: 200,
          display: "flex",
          alignItems: "flex-start",
          borderWidth: 2,
          boxShadow: 1,
          backgroundColor: "#f8f9fa",
        }
      }}
      open={isDrawerOpen}
      variant={!isMobile && "permanent"}
      onClose={toggleDrawer}
      anchor={'left'}>
      <Typography style={logo}>Plewiński Logistic</Typography>
      <Box style={navContainer}>
        <Link to={'/'}
              onClick={() => handleSelectedButton("home")}
              style={selectedButton === "home" ? iconWrapperActive : iconWrapper}>
          <HomeIcon
            style={selectedButton === "home" ? iconStyleActive : iconStyle}/>
          <Typography
            style={selectedButton === "home" ? iconTextActive : iconText}>{t("home")}</Typography>
        </Link>
        <Link to={'drivers'}
              onClick={() => handleSelectedButton("drivers")}
              style={selectedButton === "drivers" ? iconWrapperActive : iconWrapper}>
          <PersonAddAlt1Icon
            style={selectedButton === "drivers" ? iconStyleActive : iconStyle}/>
          <Typography
            style={selectedButton === "drivers" ? iconTextActive : iconText}>{t("drivers")}</Typography>
        </Link>
        <Link to={'settings'}
              onClick={() => handleSelectedButton("settings")}
              style={selectedButton === "settings" ? iconWrapperActive : iconWrapper}>
          <SettingsIcon
            style={selectedButton === "settings" ? iconStyleActive : iconStyle}/>
          <Typography
            style={selectedButton === "settings" ? iconTextActive : iconText}>{t("settings")}</Typography>
        </Link>
      </Box>
    </Drawer>
  )
};