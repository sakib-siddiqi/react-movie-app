import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./Styles/App.css";
function App() {
  return (
    <>
      <Header />
      <main className="bg-this-semi-dark  center">
        <Home />
      </main>
      <Footer />
    </>
  );
}
export default App;
