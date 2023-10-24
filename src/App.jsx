import { useState } from "react"
import { AppStyled } from "./AppStyles"
// import Biblia from "./components/biblialivre.json"
import versPromessas from "./components/vers.json"
// import Cards from "./components/cards"
import BtnCard from "./components/BtnCard"
import Topo from "./components/Topo"

function App() {

  const [corBack, setCorBack] = useState("#241D26")
  const [fontsGeral, setFontsGeral] = useState("Arial, Helvetica, sans-serif")
  const [corCardBack, setCorCardBack] = useState("#e6e6e6")
  const [corCardBorda, setCorCardBorda] = useState("#00000052 solid 1px")
  const [liv, setLiv] = useState(0)
  const [cap, setCap] = useState(0)
  const [vers, setVers] = useState(0)
  const [card, setCard] = useState(false)
  const [mensagem, setMensagem] = useState("")

  return <AppStyled corBack={corBack} setCorBack={setCorBack} fontsGeral={fontsGeral} setFontsGeral={setFontsGeral} corCardBack={corCardBack} setCorCardBack={setCorCardBack} corCardBorda={corCardBorda} setCorCardBorda={setCorCardBorda} >

    <Topo />

    <BtnCard corCardBack={corCardBack} setCorCardBack={setCorCardBack} corCardBorda={corCardBorda} setCorCardBorda={setCorCardBorda} liv={liv} setLiv={setLiv} cap={cap} setCap={setCap} vers={vers} setVers={setVers} versPromessas={versPromessas} card={card} setCard={setCard} mensagem={mensagem} setMensagem={setMensagem} />

  </AppStyled>
}

export default App