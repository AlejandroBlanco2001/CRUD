import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import { Padres } from "./pages/Padres";
import { Hijos } from "./pages/Hijos";
import Home from "./pages/Home";
import Consulta from "./pages/ConsultaPadres";
import Padressinhijos from "./pages/PadresSinHijos";
import Hijossinpadres from "./pages/HijosSinPadres";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/padres" component={Padres} />
        <Route exact path="/hijos" component={Hijos} />
        <Route exact path= "/consultapadres" component={Consulta}/>
        <Route exact path= "/consultapadressinhijos" component={Padressinhijos}/>
        <Route exact path= "/consultahijosinpadres" component={Hijossinpadres}/>

      </div>
    </HashRouter>
  );
}

export default App;
