import '../../App.css';
import { useEffect, useState, useRef } from 'react';
import HomeIcon from '../../assets/img/home.png';
import Logo from '../../assets/img/logo.png';
import { getRandomSetting, getRandomLetter } from '../../database/context';
import finish from '../../assets/sounds/finish.mp3';

function Game() {
  const [cenario, setCenario] = useState(null);
  const [letra, setLetra] = useState(null);

  const [tempo, setTempo] = useState(0);
  const [tempoDiscussao, setTempoDiscussao] = useState(0);

  const [contadorAtivo, setContadorAtivo] = useState(false);
  const [discussaoAtiva, setDiscussaoAtiva] = useState(false);

  const audioRef = useRef(new Audio(finish));

  const iniciarSorteio = () => {
    setCenario(getRandomSetting());
    setLetra(getRandomLetter());
    setTempo(3);
    setContadorAtivo(true);
    setDiscussaoAtiva(false);
    setTempoDiscussao(0);
  };

  // Temporizador do sorteio
  useEffect(() => {
    let timer;
    if (contadorAtivo && tempo > 0) {
      timer = setTimeout(() => setTempo((prev) => prev - 1), 1000);
    } else if (tempo === 0 && contadorAtivo) {
      setContadorAtivo(false);
      setDiscussaoAtiva(true);
      setTempoDiscussao(59); // tempo de escolha
    }
    return () => clearTimeout(timer);
  }, [tempo, contadorAtivo]);

  // Temporizador de escolha + som
  useEffect(() => {
    let timer;
    if (discussaoAtiva && tempoDiscussao > 0) {
      timer = setTimeout(() => setTempoDiscussao((prev) => prev - 1), 1000);
    } else if (tempoDiscussao === 0 && discussaoAtiva) {
      setDiscussaoAtiva(false);
      audioRef.current.play();
    }
    return () => clearTimeout(timer);
  }, [tempoDiscussao, discussaoAtiva]);

  return (
    <div className="container">
      <header>
        <a href="/"><img src={HomeIcon} alt="Home" className="icon-home" /></a>
      </header>

      <img src={Logo} className="logo-game" alt="Logo Quiz" />

      <div className="card">
        {contadorAtivo && (
          <div className="card-sort">
            <h2>Preparando o desafio...</h2>
            <p>{tempo}s</p>
          </div>
        )}

        {/* Frase inicial antes de sortear */}
        {!contadorAtivo && !cenario && !letra && (
          <div className="card-sort">
            <h2 style={{ color: '#ffbd59' }}>
              👋 Clique no botão <strong>"Sortear"</strong> para começar o desafio.
            </h2>
          </div>
        )}

        {/* Exibição de cenário e letra após sorteio */}
        {!contadorAtivo && cenario && letra && (
          <div className="card-sort">
            {tempoDiscussao > 0 && (
              <>
                <h2>Letra sorteada: <strong>{letra}</strong></h2>
                <h2>Cenário: <strong>{cenario.setting}</strong></h2>
              </>
            )}

            {discussaoAtiva && (
              <div className="card-time">
                <p style={{ color: '#ffbd59' }}>
                  ⏳ Tempo de escolha: <strong>{tempoDiscussao}s</strong>
                </p>
              </div>
            )}

            {!discussaoAtiva && tempoDiscussao === 0 && (
              <div className="card-time">
                <p>
                  ❌ TEMPO ENCERRADO!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <button className="button-sort" onClick={iniciarSorteio} disabled={contadorAtivo || discussaoAtiva}>
        SORTEAR
      </button>

      <footer>
        <span className="footer-description">Info Quiz © 2025</span>
        <span className="footer-author">Created by Mateus Henrique</span>
      </footer>
    </div>
  );
}

export default Game;