// Componentes
import ProyectoJAP from "./components/ProyectoJAP"
import Principal from './components/Principal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import useScreenWidth from "./CostumeHooks/useScreenWidth";

const Container = styled.div`
  background-color: #f5f5f5;
  border-radius: ${props => props.radius};
  margin: auto;
  margin-top:10px;
  margin-bottom:10px;
  width: ${props => props.width};
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding-top: 70px;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  `

function App() {
  const [isSmallScreen] = useScreenWidth(625); 
  const size = isSmallScreen ? '100%' : '80%';
  const radius = isSmallScreen ? '0' : '100px';
  return (
    <>
    <NavBar/>
    <Container width={size} radius ={radius}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/proyectojap" element={<ProyectoJAP />} />
        </Routes>
      </BrowserRouter>
    </Container>


</>
  );
}

export default App;