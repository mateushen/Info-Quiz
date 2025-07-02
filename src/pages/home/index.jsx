import '../../App.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/img/home.png';
import Logo from '../../assets/img/logo.png';

function Home() {
  const navigate = useNavigate();
  function start() {
    return navigate('/rules');
  }
  return (
    <div className="container">
      <header>
        <a href="/"><img src={HomeIcon} alt="Home" className="icon-home" /></a>
      </header>

      <h1 className="title">Bem-vindo ao</h1>
      <img src={Logo} alt="Logo Quiz" className="logo" />
      <small className="description">Teste seus conhecimentos sobre informática!</small>

      <button className="button-start" onClick={start}>🚀 Conhecer as regras</button>

      <footer>
        <span className="footer-description">Info Quiz © 2025</span>
        <span className="footer-author">Created by Mateus Henrique</span>
      </footer>
    </div>
  )
}

export default Home;