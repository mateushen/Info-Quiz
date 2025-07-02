import '../../App.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/img/home.png';
import Logo from '../../assets/img/logo.png';

function Rules() {
  const navigate = useNavigate();
  function start() {
    return navigate('/game');
  }
  return (
    <div className="container">

      <header>
        <a href="/"><img src={HomeIcon} alt="Home" className="icon-home" /></a>
      </header>

      <img src={Logo} alt="Logo Quiz" className="logo" />
      <small className="description">Antes de começar, fique ligado nas regras!</small>

      <div className='rules-description'>
        <h3>✅ <strong style={{ color: '#00bf63' }}>PERMITIDO</strong> - itens físicos, ou seja, objetos que:</h3>
        <ul>
          <li>Podem ser vistos e tocados.</li>
          <li>Possuem forma física concreta.</li>
          <li>Estão presentes no cenário sorteado.</li>
          <li>Aparelhos eletrônicos relacionados a informática e/ou tecnologia.</li>
        </ul>
      </div>

      <div className='rules-description'>
        <h3>❌ <strong style={{ color: '#e74b72' }}>PROIBIDO</strong> - respostas que sejam intangíveis ou conceituais, como:</h3>
        <ul>
          <li>Sistemas operacionais.</li>
          <li>Sites.</li>
          <li>Qualquer tipo de serviço.</li>
          <li>Programas ou aplicativos em geral.</li>
          <li>Jogos.</li>
        </ul>
      </div>

      <div className='rules-description'>
        <h3>❌ <strong style={{ color: '#e74b72' }}>PROIBIDO</strong> - componentes que possam estar presentes em computadores, como:</h3>
        <ul>
          <li>Hardwares.</li>
          <li>Periféricos.</li>
          <li>O próprio computador ou notebook.</li>
          <li>Cabos, fios ou fibras.</li>
        </ul>
      </div>

      <button className="button-start" onClick={start}>🚀 Começar</button>

      <footer>
        <span className="footer-description">Info Quiz © 2025</span>
        <span className="footer-author">Created by Mateus Henrique</span>
      </footer>
    </div>
  )
}

export default Rules;