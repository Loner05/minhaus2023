import React from "react";
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


</div>
)}


export default Home
