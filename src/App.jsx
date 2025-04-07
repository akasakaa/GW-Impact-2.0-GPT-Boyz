import {Route,Routes,useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import{auth} from "./firebase.js"

import {Toaster} from 'react-hot-toast'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'

function App() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
      if (currentPath === "/" || currentPath === "/auth") {
        navigate("/dashboard");
      }
    } else {
      if (currentPath !== "/auth") {
        navigate("/auth");
      }
    }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
     <div>
        <Routes>
          <Route path = '/' element = {<HomePage/>}></Route>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={user ? <DashboardPage /> : <AuthPage />} />
          <Route path = '/analytics' element = {    <AnalyticsPage/> }></Route>

        </Routes>
        <Toaster />
     </div>
  )
}

export default App
