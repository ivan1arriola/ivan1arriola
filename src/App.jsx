// Componentes
import ProyectoJAP from "./components/ProyectoJAP"
import Principal from './components/Principal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 100px;
  margin: auto;
  margin-top:10px;
  margin-bottom:10px;
  width: 80%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  `

function App() {
  return (
    <Container> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/proyectojap" element={<ProyectoJAP />} />
        </Routes>
      </BrowserRouter>
    </Container>

  );
}

export default App;