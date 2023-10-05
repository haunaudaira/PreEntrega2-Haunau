import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import ItemDetailContainer from "../src/components/ItemDetailContainer"
import { ItemListContainer } from "../src/ItemListContainer/ItemListContainer";

import "./index.css"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes >
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/productos' element={<ItemListContainer />} />
      <Route path='/productos/:categoria' element={<ItemListContainer />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
