import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Sprawdzamy, czy w localStorage jest zapisany użytkownik
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email) => {
    // Tutaj możesz przeprowadzić logikę logowania na podstawie adresu email
    // W tym przykładzie sprawdzamy, czy email zawiera słowo 'admin', aby przypisać rolę 'admin'
    const role = email.includes('admin') ? 'admin' : 'user';
    const newUser = { email, role };
    setUser(newUser);

    // Zapisujemy użytkownika w localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    // Wyloguj użytkownika
    setUser(null);

    // Usuwamy użytkownika z localStorage
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}