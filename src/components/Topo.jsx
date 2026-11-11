import { TopoStyle } from "./TopoStyle";
import imgLogo from "../assets/images/logo.png";

function Topo() {
  return (
    <TopoStyle>
      <img src={imgLogo} alt="Logo WGBOX" />
    </TopoStyle>
  );
}

export default Topo;