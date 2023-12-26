import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logos/logo-simple.svg';
import phoneIcn from '../assets/img/icons/call-icon-bk.png'
import bars from '../assets/img/icons/menu.png'

export default function NavMobile() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="mobile-nav flex-row justify-between items-center text-sm bg-white z-10 w-full shadow-md top-0 flex p-4">
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
        <div className="flex flex-col grow justify-center absolute top-[76px] right-[0]">
          <ul className="navbar flex flex-col grow justify-evenly font-medium text-darkGray text-center divide-y z-50 bg-white">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Productos">Productos</Link>
            </li>
            <li>
              <Link to="/Sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/Departamentos">Departamentos</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/Sucursales">Sucursales </Link>
            </li>
            <li>
              <Link to="/Horarios">Horarios</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
