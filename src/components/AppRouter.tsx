import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import News from "../pages/News";
import AuthPage from "../pages/AuthPage";
import { useAppSelector } from "../hooks";

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.newsReducer);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="/auth" element={<AuthPage />} />
      {isAuth && <Route path="/profile" element={<Profile />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
