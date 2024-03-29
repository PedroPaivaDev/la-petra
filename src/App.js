import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BagStorage } from "./contexts/BagContext";

import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BagStorage>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="sobre" element={<About/>}/>
              <Route path="produtos/*" element={<ProductsPage/>}/>
              <Route path="order" element={<Order/>}/>
              <Route path="admin" element={<Admin/>}/>
            </Routes>
          </main>
          <Footer/>
        </BagStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
