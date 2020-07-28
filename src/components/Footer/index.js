import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/FranBernardo">
        <img src={Logo} alt="Logo fran" height="40px" />
      </a>
      <p>
       
        {' '}
        <a href="https://github.com/FranBernardo">
          &copy;Fran Bernardo 2020
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
