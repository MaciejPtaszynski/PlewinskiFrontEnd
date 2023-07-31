import React, {useState, useEffect} from 'react';
import {DrawerProvider} from './context/drawerContext/DrawerContext';
import AppRoutes from './components/AppRoutes';
import LoginPage from './components/LoginPage';
import {Box} from '@mui/material';
import {useAuth} from './context/authContext/AuthContext';

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const {user, logout} = useAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log('user:', user);
    if (isMounted && !user) {
      logout();
    }
  }, [isMounted, user]);

  return (
    <Box>
      {user ? (
        <DrawerProvider>
          <AppRoutes handleClick={logout}/>
        </DrawerProvider>
      ) : (
        <LoginPage/>
      )}
    </Box>
  );
}

export default App;
