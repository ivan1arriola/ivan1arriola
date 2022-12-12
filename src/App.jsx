// Componentes
import NavBar from './components/NavBar';
import ProyectoJAP from "./components/ProyectoJAP"
import Principal from './components/Principal';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" id="home"> 
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/proyectojap" element={<ProyectoJAP />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;