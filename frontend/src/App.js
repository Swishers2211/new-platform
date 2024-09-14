import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Pages/Home';
import Catalog from "./Pages/Catalog";
import DetailProduct from "./Pages/Detail-product"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/catalog' element={<Catalog />}/>
        <Route path="/product" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
