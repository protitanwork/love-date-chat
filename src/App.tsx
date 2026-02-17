import "./App.css";
import logo from "./assets/logo.jpg";

function App() {
  return (
    <div className="page">
      <div className="container">

        <header className="header">
          <button className="menuBtn" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>

          <img
            src={logo}
            alt="Love Date Chat"
            className="logo"
          />

          <nav className="navbar">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#depoimentos">Depoimentos</a>
          </nav>
        </header>

        <h1 className="title">Love Date Chat</h1>
        <h2 className="stitle">Encontre sua Alma Gêmea</h2>

        <p className="subtitle">
          Conecte-se com pessoas especiais e encontre o amor verdadeiro.
        </p>

        <div className="loginCard">
          <h3>Se cadastre</h3>

          <input
            type="text"
            placeholder="Email"
            className="inputField"
          />

          <input
            type="text"
            placeholder="País"
            className="inputField"
          />

          <input
            type="text"
            placeholder="Número de telefone"
            className="inputField"
          />

          <input
            type="password"
            placeholder="Senha"
            className="inputField"
          />

          <button
            className="loginBtn"
            onClick={() => window.open("https://t.me/Lovedatechatvip_BOT")}
          >
            Entrar
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
