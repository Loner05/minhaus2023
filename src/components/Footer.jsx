import React from "react";
import style from "./styledContainers/Footer.module.css"
import logo_white from "../media/logo_minhaus_white.png"
import { Link } from "react-router-dom";
const Footer = () =>{
return(
<div className={style.mainContainer}>
<div className={style.FooterContainer}>
    <div className={style.ContentColumn}>
    <img src={logo_white} alt="" />
<p>Calle 45E # 70A-74 Medellin, Colombia</p>
<p>Tel: +57 3057197651</p>
</div>
{/* <Link to={"/"}>Terminos y condiciones</Link>
<Link to={"/preguntas-frecuentes"}>Preguntas Frecuentes</Link> */}
</div>
</div>
)}



export default Footer