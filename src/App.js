import React, {useState} from "react";
import {DrawerProvider} from "./context/drawerContext/DrawerContext";
import AppRoutes from "./components/AppRoutes";
import LoginPage from "./components/LoginPage";
import {Box} from "@mui/material";


function App() {
  const [isLogin, setIsLogin] = useState(true);

  const login = () => {
    setIsLogin(true)
  };

  const logout = () => {
    setIsLogin(false)
  };

  return (<Box>
      {isLogin ?
        <DrawerProvider>
          <AppRoutes handleClick={logout}/>
        </DrawerProvider> : <LoginPage handleClick={login}/>}
    </Box>

  )
}

export default App;
