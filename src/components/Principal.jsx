

// Componentes
import Habilidades from './Habilidades';
import Proyectos from './Proyectos';
import SobreMi from './SobreMi';
import Redes from './Redes';



function Principal() {
  return (
    <div className="App" id="home">

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

export default Principal;
