import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Cards from '../Cards/Cards';
import Carousels from '../Carousel/Carousel';

function App() {
  return (
    <div class="app">
      <NavigationBar />
      <Cards />
      <Carousels />
    </div>
  );
}

export default App;
