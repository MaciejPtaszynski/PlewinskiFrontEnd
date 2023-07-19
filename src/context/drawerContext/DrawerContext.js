import React, {createContext, useContext, useState} from 'react';

const DrawerContext = createContext();

export function useDrawer() {
  return useContext(DrawerContext);
}

export function DrawerProvider({children}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState)
  };

  return (
    <DrawerContext.Provider value={{isDrawerOpen, toggleDrawer}}>
      {children}
    </DrawerContext.Provider>
  )
}