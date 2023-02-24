import React from "react";
import { NavLink } from "react-router-dom";
import style from './styledContainers/Navbar.module.css'
import logo from '../media/logo_minhaus.png'
 import { AiOutlineMenu } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
const NavBar =()=>{

return(
    
      <div className= {style.menuContainer}>
      <div className={style.headerLogo}>
      <img src={logo} alt="" />
      </div>
      <header className={style.navOptions}>
        {/* <div className={style.btnMenuBox}> */}
       <input type="checkbox" id={style.btnMenu} />
        <label for={style.btnMenu} className={style.btnMenu} htmlFor={style.btnMenu}>
          <div className={style.btnMenuBox}> <AiOutlineMenu /></div></label> 
        {/* </div> */}
        <div className={style.mainMenu}>
          <div className={style.menuItemBox}> <NavLink  className={style.menuItem} to="/"><p>Home</p></NavLink></div>
          <div className={style.menuItemBox}> <NavLink  className={style.menuItem} to="/conocenos"><p>Conocenos</p></NavLink></div>
          <div className={style.menuItemBox}><NavLink  className={style.menuItem} to="/pagos"><p>Pagos</p></NavLink></div>
      <NavLink  className={style.menuItem} to="/preguntas-frecuentes"><p>Preguntas Frecuentes</p></NavLink>
      <div className={style.menuItemBox}> <NavLink  className={style.menuItem} to="/contacto"><p>Contacto</p></NavLink></div>
      </div>
      </header>
      </div>
    
)}

export default NavBar

