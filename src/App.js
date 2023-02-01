import Listado from './components/Listado';
/* import Barra from './components/Barra'
 */import Container from 'react-bootstrap/Container';


/* import Formulario from './components/Formulario'; */




function App() {
  return (
    <div className="App">

      <Container>
        <Listado>
        <h1> Listado de colaboradores</h1>
        </Listado>
      </Container>

    </div>
  )  
}

export default App;
