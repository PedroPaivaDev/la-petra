import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="cup">
        <Header/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
