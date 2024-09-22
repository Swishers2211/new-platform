import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Home from './Pages/Home';
import Catalog from "./Pages/Catalog";
import DetailProduct from "./Pages/Detail-product";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Registration from "./Pages/Registration";
import Auth from "./Pages/Auth";
import Chat from './Pages/Chat';
import FinancePage from "./Pages/Finance";
import PurchasePage from "./Pages/PurchasePage";
import SalesPage from "./Pages/SalesPage";
import ListedProductPage from "./Pages/ListedProductPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/catalog' element={<Catalog />}/>
        <Route path="/product" element={<DetailProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create_account" element={<Registration />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/purchases" element={<PurchasePage/>} />
        <Route path="/sales" element={<SalesPage />}/>
        <Route path="/listed" element={<ListedProductPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
