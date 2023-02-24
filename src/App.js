
import { Route, Routes } from 'react-router';
import './App.css';
import Conocenos from './components/Conocenos';
import Contacto from './components/Contacto';
import FAQ from './components/FAQ.jsx';
import FAQdetail from './components/FAQdetail';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ReservationEngine from './components/ReservationEngine';
import Pagos from './components/Pagos';

function App() {
  return (
    <div className="App">
       <Routes>
     <Route exact path={"/"} element={<Home/>}/>
    <Route path={"/preguntas-frecuentes"} element={<FAQ/>}/>
    <Route exact path={"/preguntas-frecuentes/:id"} element={<FAQdetail/>}/>
    <Route exact path={"/conocenos"} element={<Conocenos/>}/>
    <Route exact path={"/contacto"} element={<Contacto/>}/>
    <Route exact path={"/pagos"} element={<Pagos/>}/>
    </Routes>
    </div>
  );
}

export default App;
