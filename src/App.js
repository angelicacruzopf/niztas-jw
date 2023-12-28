import React  from 'react'
import Navbar from '../src/components/Navbar';
import NavMobile from './components/NavMobile';
import SmBanner from './components/SmBanner';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/About';
import Departamentos from './pages/Departamentos';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Locations from './pages/Locations';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';




export default function App() {



  return (
    <>
      <Navbar />
      <NavMobile />
      <SmBanner />
      <Home id="inicio"/>
      <Products id="products" />
      <AboutUs id="aboutUs" />
      <Departamentos id="departamentos" />
      <Testimonials  id="testimonials"/>
      <ContactUs id="contacto" />
      <Locations  id="sucursales" />
      <section  id="horarios"  class="flex justify-center md:hidden pb-16">
        <div class="text-center">
          <h3 class="text-darkGray"><strong>Horarios</strong></h3>
          <p >Lunes a Domingo: 10:00am - 6:00pm</p>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
}


