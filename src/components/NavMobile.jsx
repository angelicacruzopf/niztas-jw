import React, { useState } from 'react';
import logo from '../assets/img/logos/logo-simple.svg';
import phoneIcn from '../assets/img/icons/call-icon-bk.png'
import bars from '../assets/img/icons/menu.png'

import { Link } from 'react-scroll';

export default function NavMobile() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };


  return (
    <nav className="mobile-nav fixed flex-row justify-between items-center text-sm bg-white z-40 w-full shadow-md top-0 flex p-4">
      <div className="h-10">
        <img src={logo} alt="Logo ícono" class="object-fit w-full h-full"/>
      </div>
      <div className="flex items-center">
        <div>
          <img src={phoneIcn} alt="Phone icon"/>
        </div>
        <div
          className="text-lg ps-4 text-darkGray cursor-pointer"
          onClick={handleShowNavbar}
        >
          <img src={bars} alt="menu"/>
        </div>
      </div>

      {showNavbar && (
        <div className="flex flex-col grow justify-center absolute top-[70px] right-[0]">
          <ul className="navbar flex flex-col grow justify-evenly font-medium text-darkGray text-center divide-y z-50 bg-white">
          <li><Link activeClass="active" 
                            to="hero" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Inicio</Link></li>
                    <li ><Link activeClass="active" 
                            to="products" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            onSetActive={handleSetActive}>Productos</Link></li>
                    <li ><Link activeClass="active" 
                            to="aboutUs" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sobre nosotros</Link></li>
                    <li ><Link activeClass="active" 
                            to="departamentos" 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            onSetActive={handleSetActive}>Departamentos</Link></li>
                    <li ><Link activeClass="active" 
                            to="contacto" 
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                            duration={500} 
                            onSetActive={handleSetActive}>Contacto</Link></li>
                    <li ><Link activeClass="active" 
                            to="sucursales" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Sucursales</Link></li>
                    <li><Link activeClass="active" 
                            to="horarios" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500} 
                            onSetActive={handleSetActive}>Horarios</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
