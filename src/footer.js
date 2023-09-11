import React from 'react';
import CSS from "./App.css"
function Header() {
  return (
    <header>
      {/* Aba de pesquisa */}
      <div className="search">
        <input type="text" placeholder="Pesquisar..." />
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
