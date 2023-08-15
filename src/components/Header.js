import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery,Typography, Avatar, } from "@mui/material";
import {useDrawer} from "../context/drawerContext/DrawerContext";
import {useTranslation} from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from "../context/authContext/AuthContext";
import coolBg from "../assetss/cool-background.png";
import imgAvatar from "../assetss/malySmrod.png";
import adminAvatar from "../assetss/pobrane.jpeg"

export default function Header() {
  const {logout, user} = useAuth();
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
    cursor: "pointer",
    color: "white",
  };

  const logoutIcon = {
    cursor: "pointer",
    color: "white",
  }
  const backgroungImg ={
    backgroundImage: `url(${coolBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "250px",
    // maxWidth: "1210px",
    display: "flex",
    justifyContent: "center",
    // flexDirection: "column",
    borderRadius: "20px",
    width: "calc(100% - 200px)",
    marginLeft: isMobile ? "0px": "205px",
    marginRight:  "10px",
    alignItems: 'flex-end',
    marginTop: "20px",
    position: "relative",
    
    
  }
  const actionIcons ={
    display: "flex",
    justifyContent: isMobile ? "space-between" : "flex-end",
    width: "90%",
    position: "absolute",
    top: "5%",
    paddingRight: "8px",
    paddingLeft: "8px",
  }

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      // width: "100%",
      paddingLeft: "10px", 
      // paddingRight: "10px",
      // height: "calc(100vh - 80px)",
      
      
    }}>
      <Box style={backgroungImg}>
      <Box style={actionIcons}>{isMobile && <MenuIcon style={menuIcon} onClick={toggleDrawer}>open drawer</MenuIcon>}
      <LogoutIcon onClick={logout} style={logoutIcon}/>
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
      </Box>
        <Box sx={{backgroundColor: "whiteSmoke", width: "80%", height:"100px", marginBottom: -6, borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
          <Box sx={{display: "flex",justifyContent:"flexStart",alignItems:"center",flexDirection: "row"}}> 
            <Avatar sx={{width:"80px", height:"80px", borderRadius: "15px", margin: "8px"}} src={user.role === "admin" ? adminAvatar : imgAvatar} variant="rounded">
            </Avatar>
            <Typography>mother fucker</Typography>
          </Box>
        </Box>
      </Box>
        {/* <Typography>Home Page mother fucker
        </Typography> */}
    </Box>
  )
};
//   return (
//     <Box style={headerContainer}>
      // <FormControl style={languagePicker} sx={{width: 100}} size={"small"}>
      //   <InputLabel id="select-language">{t("language")}</InputLabel>
      //   <Select
      //     labelId="select-language"
      //     id="select-language"
      //     label="Language"
      //     onChange={toggleLanguage}
      //   >
      //     <MenuItem value={"pl"}>{t("polish")}</MenuItem>
      //     <MenuItem value={"en"}>{t("english")}</MenuItem>
      //   </Select>
      // </FormControl>
//       {isMobile && <MenuIcon style={menuIcon} onClick={toggleDrawer}>open drawer</MenuIcon>}
//       <LogoutIcon onClick={logout} style={logoutIcon}/>
//     </Box>
//   )
// }
