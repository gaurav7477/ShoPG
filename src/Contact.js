import React from 'react'
import { Container } from './styles/Container';
import styled from 'styled-components';
import { Button } from './styles/Button';

function Contact() {
  return (
    <Wrapper>
      <h3 className="common-heading">Contact page</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.85873999042!2d77.26546335385216!3d23.19934738989244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1675003898047!5m2!1sen!2sin"
        width="85%"
        height="500"
        style={{ border: 0 }}
        allowFullscreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">

      </iframe>
      <Container className='contact-container'>
      <div className="contact-form">
        <form action="https://formspree.io/f/mlekgnwr" method='POST' className='contact-inputs'>
          <input type="text" placeholder='username' name='username' required autoComplete='off' />
          <input type="email" placeholder='email' name='email' required autoComplete='off' />
          <textarea name="Massage" id="" cols="30" rows="10" placeholder='type here'></textarea>
          
          <Button type="submit" value="Send">send</Button>
        </form>
      </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 9rem 0 5rem 0;
text-align: center;
h3{
  margin-bottom:6rem;
}
.contact-container{
  margin-top:6rem;
}
.contact-form {
  max-width: 50rem;
  margin: auto;
}

.contact-inputs {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
input{
  height:40px;
  padding:5px;
}
textarea{
  padding:5px;
}
input[type="submit"] {
  cursor: pointer;
}


`;

export default Contact;