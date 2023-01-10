import React from "react";
import style from './styledContainers/HomeAmenities.module.css'
import wifigolden from '../media/logos_comodidades/wifi_golden.png'
import showergolden from '../media/logos_comodidades/shower_golden.png'
import kitchengolden from '../media/logos_comodidades/kitchen_golden.png'
import langolden from '../media/logos_comodidades/lan_golden.png'
import tvgolden from '../media/logos_comodidades/tv_golden.png'
import washergolden from '../media/logos_comodidades/washer_golden.png'

const HomeAmenities = () =>{

    return(
<div className={style.HomeAmenitiesContainer}>
    <div className={style.amenitiesCard}>
<div className={style.amenitiesText}>
<h2>
    Mas Cerca 
</h2>
<h2>de lo que </h2><h2> Quieres.</h2>
<div  className={style.amenitiesTextdetail}><p>Ubicacion privilegiada, cercana a</p> <p>La zona 
    rosa de la 70 estacion de metro</p> y multitud de comercios.
</div>
</div>
<div className={style.amenitiesLogoGrid}>
<div className={style.amenitiesImage}><img src={wifigolden} alt="" /></div>
<div className={style.amenitiesImage}><img src={showergolden} alt="" /></div>
<div className={style.amenitiesImage}><img src={kitchengolden} alt="" /></div>
<div className={style.amenitiesImage}><img src={langolden} alt="" /></div>
<div className={style.amenitiesImage}><img src={tvgolden} alt="" /></div>
<div className={style.amenitiesImage}><img src={washergolden} alt="" /></div>

</div>
<div>





</div>
</div>
</div>
)}

export default HomeAmenities