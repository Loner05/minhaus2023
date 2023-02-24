import React from "react";
import Checkout from "./Checkout";
import Footer from "./Footer";
import NavBar from "./Navbar";
import style from "./styledContainers/Pagos.module.css"
import bancolombia_logo from "../media/logo pagos/bancolombia_logo.png"
import nequi_logo from "../media/logo pagos/nequi_logo.png"
import transfiya_logo from "../media/logo pagos/transfiya_logo.png"
import daviplata_logo from "../media/logo pagos/daviplata_logo.png"
import visa_logo from "../media/logo pagos/visa_logo.png"
import mastercard_logo from "../media/logo pagos/mastercard_logo.png"
import amex_logo from "../media/logo pagos/amex_logo.png"
import pse_logo from "../media/logo pagos/pse_logo.png"
import paypal_logo from "../media/logo pagos/paypal_logo.png"
import sured_logo from "../media/logo pagos/sured_logo.png"
const Pagos = () =>{
return(
<div>
<NavBar/>
<div className={style.mainContainer}>
    <div className={style.bancoinforow}>
        <div className={style.bancolombiainfo}>
            <img src={bancolombia_logo} alt="bancolombia logo" />
            <p>Cuenta de ahorros Bancolombia</p>
            <p>551-353-438-37</p>
        </div>
        <div className={style.nequinfo}>
            <div className={style.nequimagenes}>
            <img src={daviplata_logo} alt="" />
            <img src={nequi_logo} alt="" />
            <img src={transfiya_logo} alt="" />
            
            </div>
            <p>Tranfiere al Nequi o Daviplata transfiya 30571976751 </p>
                <p>Realiza transferencias desde otros bancos al transfiya 3057197651</p>
        </div>
        </div>
        <div className={style.epaycobox}>
        <div   className={style.creditcardlogos}>
    
               <div><img src={visa_logo} alt="" /></div> 
               <div> <img src={mastercard_logo} alt="" /></div>
                <div><img src={amex_logo} alt="" /></div>
                <div><img src={paypal_logo} alt="" /></div>
                <div><img src={pse_logo} alt="" /></div>
                <div><img src={sured_logo} alt="" /></div>
           
        </div>
        <div>
           
        <p>Realiza pagos a traves de la plataforma de epayco.</p>

           <p>-tarjeta de credito</p>
           <p>-PSE</p>
           <p>-Paypal</p>
           <p>-Efectivo a traves de mas de 20.000 puntos Sured</p>

            
        <Checkout/>
        </div>
        
        </div>
    <div>

    </div>

</div>

<Footer/>
</div>
)}

export default Pagos