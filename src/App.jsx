import { useState } from "react";
import React from "react";
import Cards from "../Components/cards";
import Navbar from "../Components/NavBar";
import Herosection from "../Components/herosection";
import ShoppingCard from "../Components/shopping_card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar />
      <Herosection />
      <Cards />
      <ShoppingCard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Herosection />} />
            <Route path="men" element={<ShoppingCard />} />
            <Route path="women" element={<ShoppingCard />} />
            <Route path="kids" element={<ShoppingCard />} />
            <Route path="sale" element={<ShoppingCard />} />
            <Route path="Customise" element={<ShoppingCard />} />
            <Route path="snkrs" element={<ShoppingCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
