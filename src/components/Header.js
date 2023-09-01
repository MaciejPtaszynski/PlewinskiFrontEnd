import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery, Typography, Avatar, } from "@mui/material";
import { useDrawer } from "../context/drawerContext/DrawerContext";
import { useTranslation } from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../context/authContext/AuthContext";
import coolBg from "../assetss/cool-background.png";
import imgAvatar from "../assetss/malySmrod.png";
import adminAvatar from "../assetss/pobrane.jpeg";
import { useLocation } from "react-router-dom";

export default function Header() {

  const { logout, user } = useAuth();
  const { toggleDrawer } = useDrawer();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1000px)');

  const pageLocation = useLocation()
  let info = ""

  if (pageLocation.pathname === "/") {
    info = "Home Page"
  }
  else if (pageLocation.pathname === "/drivers") {
    info = "drivers"
  }
  else if (pageLocation.pathname === "/settings") {
    info = "settings"
  }
  else if (pageLocation.pathname === "/orders") {
    info = "orders"
  };

  const toggleLanguage = (e) => {
    const langValue = e.target.value
    i18n.changeLanguage(langValue)
  };

  const languagePicker = {
    marginRight: !isMobile ? 40 : 10,
    marginTop: 20,
    marginBottom: 10,
    padding: "10px 0",
  };

  const menuIcon = {
    cursor: "pointer",
    color: "white",
  };

  const logoutIcon = {
    cursor: "pointer",
    color: "white",
  };

  const backgroundImg = {
    backgroundImage: `url(${coolBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    width: "calc(100% - 200px)",
    marginLeft: isMobile ? "0px" : "205px",
    marginRight: "10px",
    alignItems: 'flex-end',
    marginTop: "20px",
    position: "relative",
  };

  const actionIcons = {
    display: "flex",
    justifyContent: isMobile ? "space-between" : "flex-end",
    width: "95%",
    position: "absolute",
    top: "5%",
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", paddingLeft: "10px", flexDirection: "column" }}>
        <Box style={backgroundImg}>
          <Box style={actionIcons}>{isMobile && <MenuIcon style={menuIcon} onClick={toggleDrawer}>open drawer</MenuIcon>}
            <LogoutIcon onClick={logout} style={logoutIcon} />
            {/* <FormControl style={languagePicker} sx={{width: 100}} size={"small"}>
        <InputLabel id="select-language">{t("language")}</InputLabel>
        <Select 
          labelId="select-language"
          id="select-language"
          label="Language"
          onChange={toggleLanguage}
        >
          <MenuItem value={"pl"}>{t("polish")}</MenuItem>
          <MenuItem value={"en"}>{t("english")}</MenuItem>
        </Select>
      </FormControl> */}
          </Box>
          <Box sx={{ backgroundImage: "linear-gradient( to top, #ffffff 20%, #E7EFFF 80%)", width: "80%", height: "100px", marginBottom: -6, borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}>
            <Box sx={{ display: "flex", justifyContent: "flexStart", alignItems: "center", flexDirection: "row" }}>
              <Avatar sx={{ width: "80px", height: "80px", borderRadius: "15px", margin: "8px" }} src={user.role === "admin" ? adminAvatar : imgAvatar} variant="rounded">
              </Avatar>
              <Typography >{info}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};
