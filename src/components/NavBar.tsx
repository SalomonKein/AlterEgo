import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { authStatus } from "../redux/reducer/ActionCreators";
import LangLocalizations from "./LangLocalizations";
import { useTranslation } from "react-i18next";

function ResponsiveAppBar() {
  const { isAuth } = useAppSelector((state) => state.newsReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, mx: 3, color: "white", display: "block" }}
            >
              {t("Main")}
            </Button>
            <Button
              onClick={() => navigate("/News")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("News")}
            </Button>
          </Box>

          {isAuth ? (
            <Box sx={{ fflexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/Profile")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {t("Profile")}
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                  localStorage.setItem("isAuth", "false");
                  dispatch(authStatus());
                }}
                sx={{ my: 2, mx: 3, color: "white", display: "block" }}
              >
                {t("Out")}
              </Button>
            </Box>
          ) : (
            <Box sx={{ fflexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/auth")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {t("In")}
              </Button>
              <Button
                onClick={() => navigate("/registration")}
                sx={{ my: 2, mx: 3, color: "white", display: "block" }}
              >
                {t("Up")}
              </Button>
            </Box>
          )}
          <LangLocalizations />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
