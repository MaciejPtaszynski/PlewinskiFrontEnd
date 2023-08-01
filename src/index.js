import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./context/i18next/I18n";
import {AuthProvider} from "./context/authContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>);