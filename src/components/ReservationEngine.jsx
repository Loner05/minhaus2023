import React, { useState } from "react";
import style from './styledContainers/ReservationEngine.module.css'
const ReservationEngine = () =>{

   let initialState ={
    start_date: '',
    end_date:''

   }
const[actualink,setLink] = useState(initialState)
const[disabled,setDisabled] = useState(true)
const handleChange =(e)=>{

setLink({...actualink, [e.target.name]:e.target.value})
//if(actualink.start_date< actualink.end_date){setDisabled(false)}
}
const handleSubmit = (e) =>{
   e.preventDefault()
   window.open(`https://engine.lobbypms.com/minhaus?lang=es&start-date=${actualink.start_date}&end-date=${actualink.end_date}`)

}

return(
<div className={style.resevationEngineContainer}>

<form className={style.forminputs} onSubmit={handleSubmit}>
 <div className={style.formfield}>
    <label>Desde</label>
    <input className={style.forminput} name="start_date" value={actualink.start_date} onChange={handleChange} type="date" />
 </div>  
 <div className={style.formfield}>
    <label>Hasta</label>
    <input className={style.forminput} name="end_date" value={actualink.end_date} onChange={handleChange} type="date" />
 </div> 
 <div className={style.formfield}>
    
 <button   className={style.searchButton}>Consultar disponilibidad</button>

 </div>
</form>
</div>
)}




export default ReservationEngine