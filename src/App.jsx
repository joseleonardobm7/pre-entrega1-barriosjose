import logo from "./assets/images/logo.png";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo=" Hola Usuario! Bienvenido a la tienda" />
      <Carousel />
    </>
  );
}

export default App;
