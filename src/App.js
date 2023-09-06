import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Minha Página Inicial</h1>
      </header>

      <section className="search">
        <input type="text" placeholder="Pesquisar..." />
        <button>Pesquisar</button>
      </section>

      <section className="services">
        <h2>Conheça Nossos Serviços</h2>
        <div className="service">
          <h3>Seguro Moto</h3>
          <p>Oferecemos seguros de moto para garantir sua segurança nas estradas.</p>
        </div>
        <div className="service">
          <h3>Seguro Carro</h3>
          <p>Proteja seu veículo com nossos serviços de seguro para carros.</p>
        </div>
        <div className="service">
          <h3>Serviço de Guincho</h3>
          <p>Estamos prontos para ajudar em situações de emergência com nosso serviço de guincho.</p>
        </div>
      </section>

      <footer>
        <p>Criado por: Live Tech</p>
      </footer>
    </div>
  );
}

export default App;