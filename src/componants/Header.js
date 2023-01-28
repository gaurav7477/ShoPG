import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} className= "logo" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  margin:0;
  height: 4.3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
   .logo {
    width:10.8rem;  
    heigth:2.4rem;
  }
`;
export default Header;
