import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Logo from "./logo.png";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Logo} className= "logo" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
   .logo {
    width:40%;  
  }
`;
export default Header;
