import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
  const [selectedMenu, setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdown]=useState(false);

  const handleMenuClick = (index) =>{
    setSelectedMenu(index);
  }

  const handleProfileClick = () => {
    setIsProfileDropdown(!isProfileDropdownOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "http://localhost:5173/signup";
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
              <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
              <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
              <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
              <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
              <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
              <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar">
            {localStorage.getItem("username")?.substring(0, 2).toUpperCase() || "ZU"}
          </div>
          <p className="username">{localStorage.getItem("username") || "USERID"}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown" style={{
              position: "absolute",
              top: "50px",
              right: "0px",
              background: "#fff",
              border: "1px solid #ddd",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              padding: "10px",
              zIndex: 1000,
              width: "100px",
              textAlign: "center"
            }}>
              <button onClick={handleLogout} style={{
                background: "#ff5722",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: "bold",
                width: "100%"
              }}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
