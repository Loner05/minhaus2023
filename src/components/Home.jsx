import React from "react";
import Footer from "./Footer";

import HomeAmenities from "./HomeAmenities";
import { HomegalleryDock } from "./HomegalleryDock";
import NavBar from "./Navbar";
import ReservationEngine from "./ReservationEngine";


const Home = () =>{

return(
<div>
    <NavBar/>
<ReservationEngine/>
<HomeAmenities/>
<HomegalleryDock/>
<div style={{background:"black"}}>
<Footer/>
</div>
</div>
)}


export default Home
