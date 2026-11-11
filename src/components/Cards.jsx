import { useEffect } from "react";
import { CardsStyled } from "./CardsStyles";

function Cards({
  card,
  versPromessas,
  mensagem,
  setMensagem,
  corCardBack,
  corCardBorda,
}) {
  useEffect(() => {
    if (!card || !versPromessas?.length) return;

    const numAleatorio = Math.floor(Math.random() * versPromessas.length);
    setMensagem(versPromessas[numAleatorio]);
  }, [card, versPromessas, setMensagem]);

  return (
    <CardsStyled
      $card={card}
      $corCardBack={corCardBack}
      $corCardBorda={corCardBorda}
    >
      {mensagem && (
        <blockquote>
          &ldquo;{mensagem.vers}&rdquo;{" "}
          <strong>({mensagem.referencia})</strong>
        </blockquote>
      )}
    </CardsStyled>
  );
}

export default Cards;