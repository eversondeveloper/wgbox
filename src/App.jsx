import { AppStyled } from "./AppStyles";
import versPromessas from "./components/vers.json";
import BtnCard from "./components/BtnCard";
import Topo from "./components/Topo";

function App() {
  const corBack = "#241D26";
  const fontsGeral = "Arial, Helvetica, sans-serif";

  return (
    <AppStyled $corBack={corBack} $fontsGeral={fontsGeral}>
      <Topo />
      <BtnCard versPromessas={versPromessas} />
    </AppStyled>
  );
}

export default App;