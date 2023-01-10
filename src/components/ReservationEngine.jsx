import React from "react";
import style from './styledContainers/ReservationEngine.module.css'
const ReservationEngine = () =>{

return(
<div className={style.resevationEngineContainer}>
<form className={style.forminputs}>
 <div className={style.formfield}>
    <label>Desde</label>
    <input className={style.forminput} type="date" />
 </div>  
 <div className={style.formfield}>
    <label>Hasta</label>
    <input className={style.forminput} type="date" />
 </div> 
 <div className={style.formfield}>
    
 <button className={style.searchButton}>Consultar disponilibidad</button>
 </div>
</form>



</div>
)}




export default ReservationEngine