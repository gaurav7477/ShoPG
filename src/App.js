import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Item from "./Item";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors:{
      bg:"#000",
    },
  }; 

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item" element={<Item />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
