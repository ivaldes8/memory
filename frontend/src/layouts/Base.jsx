import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../storage/hooks";
import { selectAlert, selectLoading } from "../storage/features/settingSlice";

import storage from "../utils/storage";
import "./Base.css";


const Base = () => {

  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "logo2" : "logo2")}
      >
        Memory
      </NavLink>
      <div className="logo" />

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tasks"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="notes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Base;
