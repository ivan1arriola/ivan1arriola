

// Estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes
import NavBar from './components/NavBar';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import Redes from './components/Redes';


function App() {
  return (
    <div className="App" id="home"> <NavBar/>

      <div id='sobreMi'>
        <SobreMi/>
      </div>

      <div id='proyectos'>
        <Proyectos/>
      </div>

      <div id='habilidades'>
        <Habilidades/>
      </div>

      <div id='redes'>
        <Redes/>
      </div>
    </div>
    
  );
}

export default App;
