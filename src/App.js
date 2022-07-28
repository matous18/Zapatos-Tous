import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import { ItemListContainer } from './components/Navbar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer text="Bienvenido"></ItemListContainer>
      <ItemListContainer text="Aquí hay zapatos de locura"></ItemListContainer>
    </div>
  );
}

export default App;
