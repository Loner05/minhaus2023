import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "./Navbar";
import db from "../db.json"
import headerimage from "../media/pqrs/faq_header.png"
import style from "../components/styledContainers/FAQdetail.module.css"
import { BiArrowBack } from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const FAQdetail = () =>{
    
const{id} = useParams()
 console.log(id)
  const[detail,setDetail]= useState(null)
  const lambda = () =>{
    let founded 
    for(let i = 0; i < Object.keys(db).length; i++){
        console.log(Object.keys(db)[i])
     founded =db[Object.keys(db)[i]].find(item => item.id == id )
     if(founded)return setDetail(founded)
    }
    }
 console.log(detail)
useEffect(()=>{
   lambda()
})
console.log(detail)
return(
<div>

<NavBar/>
<div className={style.pageheader}> 
 <h1>Preguntas Frecuentes</h1>
<img src={headerimage} alt="" />
 </div>

  <div>
  
   {
    detail&&
    <div className={style.faqDetailCardContainer}>
      
          <div className={style.faqDetailCard}>
            <div className={style.backFaqCard}>
          <NavLink to="/preguntas-frecuentes"><BiArrowBack/></NavLink> 
          </div>
          
     <h2>{detail.pregunta}</h2>
    
     <p>{detail.respuesta}</p>
     </div>
     </div>
    }
  </div>

  <Footer/>


</div>



)

}

export default FAQdetail