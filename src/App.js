
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemProduct from './components/ItemProduct/ItemProduct';
import ItemListContainer  from './components/ItemContainer/ItemListContainer';


function App() {
  return (
  <>
      <NavBar/>
      <div className='main-container'>
          <ItemListContainer section="Productos en oferta"/>
          <ItemListContainer section="Productos mas vendidos"/>
          <ItemListContainer section="Productos de temporada"/>
      </div>
  </>
);
}

export default App;

