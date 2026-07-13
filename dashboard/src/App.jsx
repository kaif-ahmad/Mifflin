import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");
    const usernameParam = urlParams.get("username");

    if (tokenParam && usernameParam) {
      localStorage.setItem("token", tokenParam);
      localStorage.setItem("username", usernameParam);
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      window.location.href = "http://localhost:5173/signup";
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h3 style={{ color: "#e68a00", fontWeight: "300" }}>Redirecting to Mifflin login...</h3>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
