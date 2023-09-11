import React from 'react';
import Header from './header'; // Importe o componente Header
import Footer from './footer'; // Importe o componente Footer
import CSS from "./App.css"
function ServicoCarro() {
  return (
    <div>
      <Header />

      <h2 className='subtitulos'>Serviço Carro</h2>

      <div className='texto-tips'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>

      <Footer />
    </div>
  );
}

export default ServicoCarro;
