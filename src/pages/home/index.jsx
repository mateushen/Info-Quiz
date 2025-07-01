import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

function Home() {
  const navigate = useNavigate();
  function start() {
    return navigate('/game');
  }
  return (
    <div className="container">
      <h1 className="title">Bem-vindo ao</h1>
      <img src={Logo} alt="Logo Quiz" className="logo" />
      <small className="description">Teste seus conhecimentos sobre informática!</small>

      <button className="button-start" onClick={start}>🚀 Começar</button>

      <footer>
        <span className="footer-description">Info Quiz © 2025</span>
        <span className="footer-author">Created by Mateus Henrique</span>
      </footer>
    </div>
  )
}

export default Home;