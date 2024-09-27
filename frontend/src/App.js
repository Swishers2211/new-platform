import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
import PremiumPage from "./Pages/PremiumPage";
import AddProductPage from "./Pages/Add-ProductPage";

const Layout = ({ children }) => {
  const location = useLocation();

  const noFooterPaths = ["/chats", "/create_account", "/auth", "/premium"];

  return (
    <>
      <Header />
      {children}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/catalog' element={<Catalog />}/>
          <Route path="/product" element={<DetailProduct />} />
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="/user/ep" element={<Profile />} />
          <Route path="/user/create_account" element={<Registration />} />
          <Route path="/user/auth" element={<Auth />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/purchases" element={<PurchasePage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/listed" element={<ListedProductPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/add_offer" element={<AddProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
