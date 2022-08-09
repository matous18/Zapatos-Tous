import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import { ItemListContainer } from './components/Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer text="Bienvenido"></ItemListContainer>
      <ItemListContainer text="Aquí hay zapatos de locura"></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
