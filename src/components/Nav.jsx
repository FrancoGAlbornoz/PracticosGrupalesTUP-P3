import React from "react";
import '../styles/nav.css'
import AboutUs from "../pages/AboutUs.jsx"


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href={AboutUs}>Acerca de Nosotros</a></li>
        <li><a href="https://www.frt.utn.edu.ar/" target="_blank" rel="noopener noreferrer">UTN FRT 2024</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
