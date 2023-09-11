import React from 'react';
import Header from './header';
import Footer from './footer';
import CSS from "./App.css"

function ServicoMoto() {
  return (
    <div>
      <Header />

      <h2 className='subtitulos'>Serviço Moto</h2>

      <div className='texto-tips'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Footer />
    </div>
  );
}

export default ServicoMoto;
