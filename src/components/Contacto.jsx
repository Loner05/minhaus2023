import React, { useState } from "react";
import NavBar from "./Navbar";
import style from "./styledContainers/Contacto.module.css"
import Iframe from "react-iframe";
import Footer from "./Footer";
import axios from "axios";
import swal from "sweetalert";

const Contacto = () =>{
const initialValue ={
name: "",
email: "",
asunto: "",
mensaje: ""
}


const[form, setForm] = useState(initialValue)
const[errors,setErrors] = useState("")
const Validate = (form) =>{
let errors = {}
let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
if(!form.name.trim()){
    errors.name = "El campo Nombre es requerido!"}
else if(!regexName.test(form.name)){
errors.name = "Ingresa un nombre valido!"}
if(!form.email.trim()){
errors.email = "El campo Email es requerido!"
} else if(!regexEmail.test(form.email)){
    errors.email = "Ingresa un email valido!"
}if (!form.asunto.trim()){
 errors.asunto = "el campo Asunto es requerido!"
}if (!form.mensaje.trim()){
    errors.mensaje = "el campo Mensaje es requerido!"
   }

return errors
}
 const handleChange = (e) =>{
    setForm({
    ...form,
    [e.target.name]: e.target.value

    })


 }
 const handleSubmit = (e) =>{
e.preventDefault()
const err = Validate(form)
console.log(errors)
setErrors(err)
if(!errors){
axios.post("http://formsubmit.co/minhausmedellin@outlook.com", form)
setForm(initialValue)
swal("Informacion Enviada", "Gracias por ponerte en contacto con nosotros!", "success");
}}

return(
<div>
<NavBar/>
<div className={style.supercontainer}>
<div className={style.mainContainer}>
<div className={style.contactInfo}>

<div className={style.contactBox}>
<div className={style.contactBoxtext}>
<div className={style.formTitleWhite}>
<h2>Escribenos</h2>
</div>



<p>Puede ponerse en contacto con nosotros a traves de:</p>

<p>  Correo electronico: contacto@minhaus.com</p>
    <p> Telefono y whatsapp: +57 3081763912</p>
    </div>
</div>
<div className={style.addressBox}>
<div className={style.formTitleWhite}>
<h2>Visitanos</h2>
</div>
 <p> Estamos ubicado es la direccion calle 45E # 70A-74 Laureles, Estadio</p>
 <div className={style.mapVisitanos}>
<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.25630038846!2d-75.59523670002812!3d6.22990307821389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429bf6143c237%3A0xa984dc2b739dc211!2sGranada%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1646851746711!5m2!1ses-419!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></Iframe>
</div>
</div>

</div>
<div className={style.formContainer}>


 
 <div>
 <form className={style.formbox} onSubmit={handleSubmit}>
 <div className={style.formTitle}>

  <h2>Escribenos</h2>
  </div>

  <div className={style.inputRow}>
   
  <input className={style.Form_inputs} type="text" placeholder="Name" value={form.name} name="name" onChange={handleChange}/>
  {errors.name && <div>{errors.name}</div> }
  </div>
  <div className={style.inputRow}>
    
  <input className={style.Form_inputs}  type="email" placeholder="Email" value={form.email} name="email" onChange={handleChange}/>
  {errors.email && <div>{errors.email}</div> }
  </div>
  <div className={style.inputRow}>
  
  <input  className={style.Form_inputs}  type="text" value={form.asunto} placeholder="Asunto" name="asunto" onChange={handleChange}/>
  {errors.asunto && <div>{errors.asunto}</div> }
  </div>
  <div className={style.inputRow}>
  <textarea rows="3" className={style.Form_textarea} type="text-area" value={form.mensaje} name="mensaje" placeholder="Mensaje" onChange={handleChange}/>
  {errors.mensaje && <div>{errors.mensaje}</div> }
  </div>
  
 <button  className={style.submitButton} type="submit" value="enviar" >ENVIAR</button>
  


 </form>


 </div>
</div>


</div>

</div>
<div style={{background:"#d2d6ef"}}>
<Footer/>
</div>
</div>
)
}

export default Contacto