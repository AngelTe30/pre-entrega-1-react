import NavBar from './Components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
	  <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
    </div>
  );
}

export default App;