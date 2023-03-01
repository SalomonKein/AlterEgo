import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { useEffect } from "react";
import { authStatus } from "./redux/ActionCreators";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authStatus());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
