// Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import NavBar from './components/NavBar';
import Habilidades from './components/Habilidades';
import HechoPorMi from './components/HechoPorMi';
import SobreMi from './components/SobreMi';


function App() {
  return (
    <div className="App" id="home"> <NavBar/>

      <div className='container' id='sobreMi'>
        <SobreMi/>

      </div>

      <div className='container' id='hechoPorMi'>
        <HechoPorMi/>
      </div>

      <div className='container' id='habilidades'>
        <Habilidades/>
      </div>
      
    </div>
    
  );
}

export default App;
