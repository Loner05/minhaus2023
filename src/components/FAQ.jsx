import React from "react";
import NavBar from "./Navbar";
import headerimage from "../media/pqrs/faq_header.png"
import style from "./styledContainers/FAQ.module.css"
import FAQdetail from "./FAQdetail";
import FAQtheme from "./FAQtheme";
import { Link } from "react-router-dom";
import Footer from "./Footer";

 const FAQ = () =>{

return(
<div>
<NavBar/>

 <div className={style.pageheader}> 
 <h1>Preguntas Frecuentes</h1>
<img src={headerimage} alt="" />
 </div>


        <div className={style.selectorRow}>
        <div className={style.selectorButton} >
        <Link to={"/preguntas-frecuentes"}>
          
               General
            
            </Link>
            </div>
            <div className={style.selectorButton} >
            <Link to={"/preguntas-frecuentes"}>  <a>Manual de la casa</a> </Link>
            </div>
        </div>
    <div>
      {
       <FAQtheme />
      }
    </div>
    <div style={{background:"#eef4f8"}}>
<Footer/>
</div>
</div>



)


}

export default FAQ