import React  from 'react'
import Navbar from '../src/components/Navbar';
import NavMobile from './components/NavMobile';
import SmBanner from './components/SmBanner';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/About';
import Departamentos from './pages/Departamentos';

export default function App() {
  return (
    <>
      <Navbar />
      <NavMobile />
      <SmBanner />
      <Home />
      <Products />
      <AboutUs />
      <Departamentos />
    </>
  );
}


