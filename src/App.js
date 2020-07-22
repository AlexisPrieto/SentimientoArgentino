import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/BackDrop/Backdrop';

import Inicio from './Components/Secciones/Inicio.js'
import Productos from './Components/Secciones/Productos.js'
import Pedidos from './Components/Secciones/Pedidos.js'
import Galeria from './Components/Secciones/Galeria.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [state, setState] = React.useState({
    sideDrawerOpen: false
  });

  function drawerToggleClickHandler (e) {
    setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  function backdropClickHandler (e) {
    setState({sideDrawerOpen: false});
  };

  function lngEs (e){
      i18n.changeLanguage("es");
  };

  function lngFr (e){
      i18n.changeLanguage("fr");
  };

  const { i18n } = useTranslation(['translation']);

  

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }
  return (
    <div>
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar 
          drawerClickHandler={drawerToggleClickHandler}
          lngEs={lngEs}
          lngFr={lngFr}
           />
          <SideDrawer show={state.sideDrawerOpen} />
          {backdrop}
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/Inicio" component={Inicio}/>
          <Route exact path="/Productos" component={Productos}/>
          <Route exact path="/Pedidos" component={Pedidos}/>
          {/*<Route exact path="/Galeria" component={Galeria}/>*/}
        </Switch>
        </div>
      </Router>
      
    </div>
  );
};
export default App;