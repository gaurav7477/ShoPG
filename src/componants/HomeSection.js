import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from "react-router-dom";
import { Container } from '../styles/Container';
import shoes from "../images/shoes.png";
import backImage1 from "../images/backImage.png";
import Vector from "../images/Vector.png";
import Vector1 from "../images/Vector1.png";


const HomeSection = () => {


    return (
        <Wrapper>
            <Container className='homeSectionStyle'>
                <div className="grid gridTwoColumn">

                    <div className="homeSectionData">

                        <div className='heading1Style'>
                            <h1> Free Shoes <br></br>
                                Buy Now...</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, ad laudantium! Omnis voluptates reprehenderit, ducimus aliquam nulla veniam iure voluptatibus a ratione, aut repudiandae eius tempora pariatur maxime quas veritatis quod culpa maiores nostrum possimus rerum laborum reiciendis quis natus! Doloremque inventore, dolores ad fuga obcaecati eveniet dicta laboriosam modi!</p>
                        <NavLink>
                            <Button>visit now</Button>
                        </NavLink>
                    </div>

                    {/* our homepage image  */}
                    <div className="homeSectionImage">
                        <figure>
                            <img src={backImage1} alt="backImage" className='homeSectionback' />
                            <img src={shoes} alt="shoseImage" className='homeSectionImageshoes' />
                            <img src={Vector} alt="Vector" className='homeSectionvector' />
                            <img src={Vector1} alt="Vector1" className='homeSectionvector1' />
                        </figure>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.homeSectionStyle{
    
}
.homeSectionData{
    padding:80px 0;
    display:flex;
    flex-direction:column;
    justify-content: center;
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
}

.homeSectionImage{
    position : relative;
}

figure {
    .homeSectionImageshoes{
        position: absolute;
        z-index: 10;
        left: 101px;
        
    }
    .homeSectionback{
        position: absolute;
        z-index: 5;
        left: 1%;
    }
    .homeSectionvector{
        position: absolute;
        z-index: 5;
        right: -12%;
        top: 11%;
    }
    
    .homeSectionvector1{
        position: absolute;
        z-index: 5;
        bottom: -7%;
        right: 32%;
    }

}
`;

export default HomeSection;