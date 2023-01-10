import React from "react";
import NavBar from "./Navbar";
import headerimage from "../media/pqrs/faq_header.png"
import style from "./styledContainers/FAQ.module.css"

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
    <p>General</p>
</div>
<div className={style.selectorButton} >
      <p>Manual de la casa</p>
</div>

</div>
</div>



)


}

export default FAQ