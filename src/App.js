import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import SingleProduct from "./SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./componants/Header";
import Item from "./Item";
import Footer from "./componants/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "#1A0E4E",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      bg_nav: "#212529",
      helper: "#8490ff",

      bg_: "#8BD6BF",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/item" element={<Item />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;