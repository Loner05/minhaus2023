import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Footer from "./Footer";
// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import NavBar from './Navbar';
import style from './styledContainers/Conocenos.module.css'

function Conocenos() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
          
            <NavBar/>
            <div className={style.headerTextContainer}>
                <div className={style.headerText}>
                <p>Minhaus se encuentra ubicado en el sector de la 70, una de las zonas más vibrantes y emocionantes de la ciudad,
                    con una amplia variedad de restaurantes, bares y tiendas a pocos pasos de distancia. cuenta 
                    con jardines verdes interiores, lo que le brinda a los huéspedes una sensación de tranquilidad y paz en medio de la ciudad.
                    </p>

                    {/* <p> El alojamiento está completamente equipado para satisfacer todas las necesidades de los huéspedes, incluyendo una cocina completamente dotada 
                    con todo lo necesario para cocinars, una ducha de hidromasaje para relajarse después de un día agotador, y espacios comodos y 
                    funcionales pensados para el descanso y la comodidad de los huéspedes.</p> */}

                    <p> Es un espacio perfecto para aquellos que buscan una combinación de comodidad, accesibilidad y una experiencia 
                    única en la ciudad. Los huéspedes podrán disfrutar de la vida nocturna y cultural que ofrece la zona, mientras que al mismo tiempo podrán
                    relajarse en un espacio tranquilo y cómodo con todo lo que necesitan a su disposición.</p>


                </div>
            </div>
            <LightGallery
            elementClassNames={style.galleryGrid}
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >   
            <a  className={style.mainImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677083875/IMG-20191023-WA0003_sfvrtr.jpg">
                    <img   className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677083875/IMG-20191023-WA0003_sfvrtr.jpg" alt=""/>                   
              </a>
              <a  className={style.oneImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989772/canvas3_glqplm.png">
                    <img   className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989772/canvas3_glqplm.png" alt=""/>                   
              </a>
              <a    className={style.twoImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/7_l2umu1.png">
  
                        <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/7_l2umu1.png" alt=""/>                   
             </a>
         
         <a  className={style.threeImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677079205/b24f5ea0-3eff-449a-96f1-f89f57216c7c_uatzku.png"> 
         <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677079205/b24f5ea0-3eff-449a-96f1-f89f57216c7c_uatzku.png" alt=""/>
         </a>
         
        
         <a  className={style.fourImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989766/5_xoi3zi.jpg"> 
         <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989766/5_xoi3zi.jpg" alt=""/>
         </a>
         
         
         <a  className={style.fiveImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/2_jytz3c.jpg"> 
            <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/2_jytz3c.jpg" alt=""/>
            </a>
         
       
         <a  className={style.sixImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/6_xvho0n.png"> 
            <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/6_xvho0n.png" alt=""/>
            </a>
         
         
         <a  className={style.sevenImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/1_hb33vf.png"> 
            <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/1_hb33vf.png" alt=""/>
            </a>
         
         
         <a  className={style.eightImg}  href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/8_u5gwyu.png"> 
            <img className={style.imgl} src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/8_u5gwyu.png" alt=""/>
            </a>
         
             
    
                
                <a className={style.nineImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/4_oe2ady.jpg">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989767/4_oe2ady.jpg" />
                </a>
               
                
                 <a className={style.tenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989768/IMG_20190614_155936_q9tyhm.jpg">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989768/IMG_20190614_155936_q9tyhm.jpg" />
                </a> 
               
               
                <a className={style.elevenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/3_byrim3.jpg">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989765/3_byrim3.jpg" />
                </a>
                
                
                 <a className={style.twelveImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677077840/94e451e2-60a2-4c00-997f-5cc55d893e16_y9i4tf.jpg">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677077840/94e451e2-60a2-4c00-997f-5cc55d893e16_y9i4tf.jpg" />
                </a> 
                
                 <a className={style.thirteenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989768/IMG_20190614_155936_q9tyhm.jpg">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989768/IMG_20190614_155936_q9tyhm.jpg" />
                </a> 
               
                <a className={style.fourteenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677078754/065efc56-d578-4f82-907f-1b16bd9b2220_sfzhre.png">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677078754/065efc56-d578-4f82-907f-1b16bd9b2220_sfzhre.png" />
                </a> 

                <a className={style.fifteenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677078690/b4cffc76-c4ca-439d-a925-4c2e1e87e38c_tcuqtb.png">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1677078690/b4cffc76-c4ca-439d-a925-4c2e1e87e38c_tcuqtb.png" />
                </a> 
          
               
             
                <a className={style.tenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989772/canvas3_glqplm.png">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989772/canvas3_glqplm.png" />
                </a> 
          
                 <a className={style.tenImg} href="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989773/canvas4_sg1fxc.png">
                    <img className={style.imgl} alt="img2" src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1676989773/canvas4_sg1fxc.png" />
                </a> 
                
                
            </LightGallery> 
          <Footer/>
          
        </div>
    );
}


export default Conocenos