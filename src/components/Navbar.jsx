import React from 'react';
import logoHorizontal from '../assets/img/logos/logo-horizontal.svg';
import BtnIcnLeft from './buttons/BtnIcnLeft';
import { Link } from 'react-scroll';

export default function Navbar() {

    const handleSetActive = (to) => {
        console.log(to);
      };

    return (
        <nav class="navbar fixed-nav flex-row justify-between items-center text-sm bg-white py-2 px-4 fixed z-50 w-full gap-4">
            <div class="h-10">
                <img src={logoHorizontal} alt="Logo nitza's" class="object-fit w-full h-full"/>
            </div>  
            <div className='flex flex-row grow justify-center max-w-[1000px]'>
                <ul class='flex flex-row grow justify-evenly font-normal text-center text-darkGray gap-2'>
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
                    
                </ul>
            </div>
            <div>
                <BtnIcnLeft>(939) 252 4501</BtnIcnLeft>
            </div>
        </nav>
        
    );
}
