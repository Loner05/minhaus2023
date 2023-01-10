
import { Route, Routes } from 'react-router';
import './App.css';
import FAQ from './components/FAQ.jsx';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ReservationEngine from './components/ReservationEngine';

function App() {
  return (
    <div className="App">
       <Routes>
     <Route exact path={"/"} element={<Home/>}/>
    <Route path={"/preguntas-frecuentes"} element={<FAQ/>}/>
    </Routes>
    </div>
  );
}

export default App;
