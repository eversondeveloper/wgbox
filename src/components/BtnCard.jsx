import { useEffect, useState } from "react";
import {
  BtnCardStyle,
  CardBack,
  CardFront,
  CardItem,
  CardNumber,
} from "./BtnCardStyle";
import somHover from "../assets/sounds/hover.mp3";
import somMensagem from "../assets/sounds/mensagem.mp3";
import tirandoCarta from "../assets/sounds/tirandocarta.mp3";

const CARDS_CONFIG = [
  { id: "card16", bg: "#FF007F", color: "#fff", scale: 0.35, zIndex: 1 },
  { id: "card15", bg: "#00E5FF", color: "#000", scale: 0.4, zIndex: 2 },
  { id: "card14", bg: "#6200EA", color: "#fff", scale: 0.45, zIndex: 3 },
  { id: "card13", bg: "#FFD600", color: "#000", scale: 0.5, zIndex: 4 },
  { id: "card12", bg: "#FF3D00", color: "#fff", scale: 0.55, zIndex: 5 },
  { id: "card11", bg: "#00E676", color: "#000", scale: 0.6, zIndex: 6 },
  { id: "card10", bg: "#2962FF", color: "#fff", scale: 0.65, zIndex: 7 },
  { id: "card9", bg: "#FF9100", color: "#000", scale: 0.7, zIndex: 8 },
  { id: "card8", bg: "#D500F9", color: "#fff", scale: 0.75, zIndex: 9 },
  { id: "card7", bg: "#AEEA00", color: "#000", scale: 0.8, zIndex: 10 },
  { id: "card6", bg: "#C51162", color: "#fff", scale: 0.85, zIndex: 11 },
  { id: "card5", bg: "#1DE9B6", color: "#000", scale: 0.9, zIndex: 12 },
  { id: "card4", bg: "#304FFE", color: "#fff", scale: 0.95, zIndex: 13 },
  { id: "card3", bg: "#FFEA00", color: "#000", scale: 1, zIndex: 14 },
];

function BtnCard({ versPromessas }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [cardAtual, setCardAtual] = useState("");
  const [mensagemAtual, setMensagemAtual] = useState(null);
  const [historico, setHistorico] = useState([]);

  const playHoverSound = () => {
    const audio = new Audio(somHover);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (!hasInteracted) return;

    const audioCarta = new Audio(tirandoCarta);
    audioCarta.volume = 0.3;
    audioCarta.play().catch(() => {});

    if (!isCardOpen) {
      const closeTimer = setTimeout(() => {
        setMensagemAtual(null);
        setCardAtual("");
        setHasInteracted(false);
      }, 1000);

      return () => clearTimeout(closeTimer);
    }

    const numAleatorio = Math.floor(Math.random() * versPromessas.length);
    const sorteado = versPromessas[numAleatorio];
    setMensagemAtual(sorteado);

    const timer = setTimeout(() => {
      const audioMensagem = new Audio(somMensagem);
      audioMensagem.volume = 0.3;
      audioMensagem.play().catch(() => {});

      setHistorico((prev) => {
        if (prev.length >= 5) return prev;
        return [...prev, `"${sorteado.vers}" (${sorteado.referencia})`];
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [isCardOpen, hasInteracted, versPromessas]);

  const handleCardClick = (id) => {
    setHasInteracted(true);

    if (isCardOpen) {
      setIsCardOpen(false);
    } else {
      setCardAtual(id);
      setIsCardOpen(true);
    }
  };

  return (
    <BtnCardStyle>
      <aside className="aside1">
        <div>
          <p>
            Desenvolvido por <br />
            <a
              href="https://everson33rj.github.io/digitalbusinesscard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Everson Silva
            </a>
          </p>
          <p>
            Bíblia Versão <br />
            <a
              href="https://sites.google.com/site/biblialivre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bíblia Livre
            </a>
          </p>
          <p>
            Efeitos sonoros <br />
            <a
              href="https://pixabay.com/pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
          </p>
          <p>
            WGBOX - 2023 <br />
            Word of God on the Box
          </p>
        </div>
      </aside>

      <main className="mainGeral">
        {CARDS_CONFIG.map((item, index) => {
          const isActive = isCardOpen && cardAtual === item.id;

          return (
            <CardItem
              key={item.id}
              $scale={item.scale}
              $zIndex={item.zIndex}
              $isActive={isActive}
              $hasInteracted={hasInteracted && cardAtual === item.id}
              onMouseEnter={playHoverSound}
              onClick={() => handleCardClick(item.id)}
            >
              <CardNumber $scale={item.scale} $isActive={isActive}>
                <span>{index + 1}</span>
              </CardNumber>
              <CardFront $bg={item.bg} $color={item.color}>
                {cardAtual === item.id && mensagemAtual && (
                  <blockquote>
                    &ldquo;{mensagemAtual.vers}&rdquo;{" "}
                    <strong>({mensagemAtual.referencia})</strong>
                  </blockquote>
                )}
              </CardFront>
              <CardBack $bg={item.bg} $color={item.color} />
            </CardItem>
          );
        })}
      </main>

      <aside className="aside2">
        <div>
          {historico.map((texto, index) => (
            <p key={index}>{texto}</p>
          ))}
        </div>
        {historico.length >= 5 && (
          <button type="button" onClick={() => setHistorico([])}>
            Limpar
          </button>
        )}
      </aside>
    </BtnCardStyle>
  );
}

export default BtnCard;