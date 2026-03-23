import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import {
  FadeIn,
  Navigation,
  Footer
} from "./components";

function Layout() {
  const [mode, setMode] = useState<string>(() => {
    return localStorage.getItem("mode") || "dark";
  });

  const handleModeChange = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode);
      return newMode;
    });
  };

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <FadeIn transitionDuration={700}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

        <Toolbar />

        <Outlet />

        <Footer />
      </FadeIn>
    </div>
  );
}

export default Layout;