import React from "react";
import {DrawerProvider} from "./context/drawerContext/DrawerContext";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <DrawerProvider>
      <AppRoutes/>
    </DrawerProvider>
  )
}

export default App;