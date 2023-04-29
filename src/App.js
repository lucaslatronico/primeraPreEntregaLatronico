import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"LA RONERIA"}/>
    </div>
  );
}

export default App;
