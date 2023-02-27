import React from "react";
import {Routes, Route} from 'react-router-dom';
import { useSelector } from "react-redux";
// import { SHOP_ROUTE } from "../utils/consts";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import News from "../pages/News";
import AuthPage from "../pages/AuthPage";


const AppRouter = () => {
    const isAuth = true
    // useSelector(state => state.auth.isAuth )
    
  return(
   <Routes>  
    <Route path="/" element={<Main/>} />
    <Route path="/news" element={<News/>} />  
    <Route path="/auth" element={<AuthPage/>} />    
    {isAuth && <Route  path="/profile" element={<Profile/>}/>}
  </Routes>
  );
};


export default AppRouter;