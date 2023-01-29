import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from './styles/Button';
import { Container } from './styles/Container';

const ErrorPage = () => {
  return (
    <Wrapper>
      <Container>
        <div className='error-content'>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`


.error-content {
  padding: 9rem 0;
  text-align: center;
}

  h2 {
    font-size: 10rem;
  }
  h3 {
    font-size: 4.2rem;
  }
  p {
    margin: 2rem 0;
  }
  Button{
    font-size:22px;
    width: 195px;
    height: 74px;
  }


`;

export default ErrorPage