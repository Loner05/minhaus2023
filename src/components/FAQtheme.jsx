import React from "react";
import { Link } from "react-router-dom";
import db from "../db.json";
import style from "./styledContainers/FAQtheme.module.css"

const FAQtheme = () =>{

return(
  <div className={style.mainContainer}>
<div className={style.cardscontainer}>
 { 
Object.keys(db).map(theme =>(
    <div className={style.FAQthemecard}>
      <h2>{theme}</h2>
      {
    db[Object.keys(db)[Object.keys(db).indexOf(theme)]].map( pregunta => <Link to={`/preguntas-frecuentes/${pregunta.id}`}><a>{pregunta.pregunta}</a></Link>)}
    </div>
   ))}

</div>
</div>
)}


export default FAQtheme