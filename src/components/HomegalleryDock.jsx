import React from "react";
import style from './styledContainers/HomegalleryDock.module.css'
import displayimage1 from '../media/galeria/3.jpg'
import displayimage2 from '../media/galeria/4.jpg'
import displayimage3 from '../media/galeria/2.jpg'
export const HomegalleryDock = () =>{

return(
<div className={style.mainContainer}>

<figure className={style.dockgallerycontainer}>

<div className={style.imageContainer}>
    <div className={style.mainImagedock}>
    <img src={displayimage1} alt="" />
    </div>
        <div className={style.imgColumn}>
            <div>
            <img className={style.columnImage1} src={displayimage2} alt="" />
            </div>
         <div >
         <img className={style.columnImage2} src={displayimage3} alt="" />
         </div>
        
        </div>

</div>
<div className={style.hoverbox}>
 <button className={style.shazambutton}>Visitar Galeria</button>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aspernatur sapiente ducimus quas quaerat sit architecto deserunt. Aut sint fugiat minus, officia eius nisi, facere accusantium laudantium vel, reiciendis ad.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque qui eveniet aperiam, in dolore quam quibusdam ducimus beatae, dolorum vero delectus deleniti magnam quae saepe. Laudantium perspiciatis deserunt et suscipit?</p>
 </div>



</figure>

</div>
)}