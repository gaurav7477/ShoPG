import React from 'react'
import { Container } from "./styles/Container";
import styled from 'styled-components';
import men from "./images/Men.png";
import women from "./images/women.png";
import kid from "./images/kid.png";
import accessories from "./images/accessories.png";
import home_aliance from "./images/home appliance.png";
import tools from "./images/tools.png";
import electronics from "./images/electronics.png";
import books from "./images/books.png";


function Item() {
  return (
    <Wrapper>
      <Container>
        <h1 className='item-heading'>Categories</h1>
        <div className="grid gridFourColumn">
          
          <div className="itemSectionImage">
              <img src={men} alt="menImage" className='menImage' />    
              <p className='men'>Men</p>
          </div>

          <div className="itemSectionImage">
              <img src={women} alt="womenImage" className='womenImage' />
              <p className='men'>Women</p>
          </div>

          <div className="itemSectionImage">
              <img src={kid} alt="kidImage" className='kidImage' />
              <p className='men'>Kid</p>
          </div>

          <div className="itemSectionImage">
              <img src={accessories} alt="accImage" className='accImage' />
              <p className='men'>Accessories</p>
          </div>

          <div className="itemSectionImage">
              <img src={home_aliance} alt="menImage" className='menImage' />    
              <p className='men'>Home Aliance</p>
          </div>

          <div className="itemSectionImage">
              <img src={tools} alt="menImage" className='menImage' /> 
              <p className='men'>Tools</p>   
          </div>

          <div className="itemSectionImage">
              <img src={electronics} alt="menImage" className='menImage' />    
              <p className='men'>Electronics</p>
          </div>

          <div className="itemSectionImage">
              <img src={books} alt="menImage" className='menImage' />    
              <p className='men'>Books</p>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.section`
img{
  border-radius: 20px 20px 0px 0px;
}
h1{
  text-align:center;
}
.itemSectionImage{
  width:260px;
  height:300px;
  text-align:center;
  background-color:#F8FBFF;
  border-radius: 20px;
}
.men{
  text-align:center;
  font-size:17px;
}
.item-heading{
  margin-bottom: -176px;
}


`;

export default Item;