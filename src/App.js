import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Error404 from "./pages/404";
import Bienvenida from "./pages/bienvenida";
import Academia from "./pages/academia";
import Biotecnologia from "./pages/biotecnologia";
import Artista1Dia1 from "./pages/biotecnologia/artista1dia1";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Bienvenida />
            </Route>
            <Route exact path="/academia">
              <Academia />
            </Route>
            <Route exact path="/biotecnologia">
              <Biotecnologia />
            </Route>
            <Route exact path="/biotecnologia/artista1dia1">
              <Artista1Dia1 />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
