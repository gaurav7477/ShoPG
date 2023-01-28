import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from "react-router-dom";
import { Container } from '../styles/Container';

function SecondContainer() {
    return (
        <Wrapper>
            <Container className='secondConStyle'>
                <div className="secondContainer">

                    <div className='secondContainerData'>
                        <h1>Extra 50% off sales</h1>
                        <p>Get your Carts full Today</p>
                    </div>
                    <NavLink>
                        <Button className='wh'>shop now</Button>
                    </NavLink>
                    <p>Sale ends in 10:23:18</p>
                </div>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.secondContainer{
    padding:150px 0px;
    width:fit-content;
    margin:auto;
    text-align: center;

}
.secondConStyle{
    background: rgba(216, 105, 255, 0.1);
}
.wh{
    width: 160px;
    height: 53px;
}


`;

export default SecondContainer;