import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery} from "@mui/material";
import {useDrawer} from "../context/drawerContext/DrawerContext";
import {useTranslation} from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from "../context/authContext/AuthContext";


export default function Header() {
  const {logout} = useAuth();

  const {toggleDrawer} = useDrawer();
  const {t, i18n} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1000px)');

  const toggleLanguage = (e) => {
    const langValue = e.target.value
    i18n.changeLanguage(langValue)
  };

  const headerContainer = {
    width: "calc(100% - 200px)",
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 30,
    boxShadow: !isMobile ? `rgba(0, 0, 0, 0.05) 0px 3px 8px` : "none",
    padding: 5,
    backgroundColor: !isMobile ? "#f8f9fa" : "transparent",
  };

  const languagePicker = {
    marginRight: !isMobile ? 40 : 10,
    marginTop: 20,
    marginBottom: 10,
    padding: "10px 0",
  };

  const menuIcon = {
    cursor: "pointer"
  };

  const logoutIcon = {
    paddingRight: !isMobile ? 50 : 20,
    cursor: "pointer"
  }

  return (
    <Box style={headerContainer}>
      <FormControl style={languagePicker} sx={{width: 100}} size={"small"}>
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
      </FormControl>
      {isMobile && <MenuIcon style={menuIcon} onClick={toggleDrawer}>open drawer</MenuIcon>}
      <LogoutIcon onClick={logout} style={logoutIcon}/>
    </Box>
  )
}
