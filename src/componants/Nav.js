import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose,CgShoppingCart} from "react-icons/cg";
import { Button } from '../styles/Button';

const Nav = ()=> {
    const [menuIcon, setMenuIcon] = useState();

    const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 33px;
      align-items: center;
      list-style-type:none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 400;
          text-transform: capitalize;
          color: ${({ theme }) => theme.colors.bgnav};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
 
    .cart-trolly{
      width:41.71px;
      height:39px;
      color:#1A0E4E;
      cursor:pointer;
    }



    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.bgnav};
        .mobile-nav-icon {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.bgnav};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 3rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.bgnav};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 2rem;
        }
      }



    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li className="navbar-link">
            <NavLink to="/" className="navbar-link" onClick={()=> setMenuIcon(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-link" onClick={()=> setMenuIcon(false)}>about</NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-link" onClick={()=> setMenuIcon(false)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-link" onClick={()=> setMenuIcon(false)}>product</NavLink>
          </li>
          <li>
            <NavLink to="/" className="navbar-link" onClick={()=> setMenuIcon(false)}>icon</NavLink>
          </li>
          <li>
            <Button>Log In</Button>
          </li>
          <CgShoppingCart name = "cart"  className = "cart-trolly" />

        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};


export default Nav