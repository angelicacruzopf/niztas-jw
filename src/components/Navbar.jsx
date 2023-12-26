import React from 'react';
import {Link} from 'react-router-dom';
import logoHorizontal from '../assets/img/logos/logo-horizontal.svg';
import BtnIcnLeft from './buttons/BtnIcnLeft';

export default function Navbar() {

    return (
        <nav class="navbar fixed-nav flex-row justify-between items-center text-sm bg-white py-2 px-4">
            <div class="h-10">
                <img src={logoHorizontal} alt="Logo nitza's" class="object-fit w-full h-full"/>
            </div>  
            <div class='flex flex-row grow justify-center'>
                <ul class='flex flex-row grow justify-evenly font-normal text-center text-darkGray'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/">Productos</Link></li>
                    <li><Link to="/">Sobre nosotros</Link></li>
                    <li><Link to="/">Departamentos</Link></li>
                    <li><Link to="/p">Contacto</Link></li>
                    <li><Link to="/">Sucursales</Link></li>
                    <li><Link to="/">Horarios</Link></li>
                </ul>
            </div>
            <div>
                <BtnIcnLeft>(939) 252 4501</BtnIcnLeft>
            </div>
        </nav>
        
    );
}
