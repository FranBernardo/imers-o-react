import React from 'react';
import Logo from '../../img/logo.png';
import './menu.css'
import ButtonLink from './componentes/ButtonLink';

function Menu(){
    return (
       <nav className="Menu">
           <a href="/">
              <img className="Logo" src={Logo}/> 
           </a>
           <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
           </ButtonLink>
       </nav>
    );
}

export default Menu;