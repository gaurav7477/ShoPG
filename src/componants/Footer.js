import React from 'react'
import styled from 'styled-components';
import { Container } from '../styles/Container';
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <Wrapper >
      <footer>
        <Container>
          <div className="hello">

            <div className="footer_data">
              <div className="footer-about">
                <p>POLICY INFO </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>

              <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                  <input type="email" name="email" placeholder="YOUR E-MAIL" />

                  <input type="submit" value="subscribe" />
                </form>
              </div>
            </div>

            <div className="footer_data">
              <div className="footer-about">
                <h3>Thapa Technical</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>

              <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                  <input type="email" name="email" placeholder="YOUR E-MAIL" />

                  <input type="submit" value="subscribe" />
                </form>
              </div>
            </div>



            <div className="footer_data">
              <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                    <FaDiscord className="icons" />
                  
                    <FaInstagram className="icons" />
                  
                    <a href='https://www.youtube.com/'>
                      <FaYoutube className="icons" />
                    </a>
                  </div>
                </div>
              </div>
            

            <div className="footer_data">
              <div className="footer-contact">
                <h3>Call Us</h3>
                <h3>+91 12345678978</h3>
              </div>
            </div>


          </div>
        </Container>
      </footer>
    </Wrapper >
  )
}
const Wrapper = styled.section`

footer {
  padding: 4rem 0 5rem 0;
  background-color: ${({ theme }) => theme.colors.footer_bg};
}
.hello{
  display:flex;
  flex-direction:row;
}
.footer_data{
  width:25%;
  display:flex;
  flex-direction:column;
}

h3 {
  color: ${({ theme }) => theme.colors.hr};
  margin-bottom:1rem;
}
p {
  color: ${({ theme }) => theme.colors.white};
  margin-bottom:1rem;
}
.footer-social--icons {
  display: flex;
  gap: 2rem;
  font-size:2rem;
  color:#fff;
  div {
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.4rem;
      position: relative;
      cursor: pointer;
    }
  }
}


`;
export default Footer;

