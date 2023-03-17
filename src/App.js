import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Products from "./pages/Products/Products";
import Seasonal from "./pages/Seasonal/Seasonal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="/produtos" element={<Products/>}/>
            <Route path="/contato" element={<Contact/>}/>
            <Route path="/sazonal" element={<Seasonal/>}/>
            <Route path="/order" element={<Order/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
