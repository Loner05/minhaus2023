import React from "react";
import { NavLink } from "react-router-dom";
import style from './styledContainers/Navbar.module.css'
import logo from '../media/logo_minhaus.png'
const NavBar =()=>{

return(
    <div> 
      <div className= {style.menuContainer}>
      <div className={style.headerLogo}>
      <img src={logo} alt="" />
      </div>
      
        <div className={style.mainMenu}>
      <NavLink to="/"><p>Home</p></NavLink>
      <NavLink  to="/"><p>Conocenos</p></NavLink>
      <NavLink  to="/"><p>Pagos</p></NavLink>
      <NavLink  to="/preguntas-frecuentes"><p>Preguntas Frecuentes</p></NavLink>
      <NavLink  to="/"><p>Contacto</p></NavLink>
      </div>
      </div>
    </div>
)}

export default NavBar

