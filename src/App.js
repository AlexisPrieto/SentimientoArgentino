import logo from './logo.svg';
import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/BackDrop/Backdrop';

import Inicio from './Components/Secciones/Inicio.js'
import Productos from './Components/Secciones/Productos.js'
import Pedidos from './Components/Secciones/Pedidos.js'
import Galeria from './Components/Secciones/Galeria.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{marginTop: '64px'}}>
          </main>
       
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/Inicio" component={Inicio}/>
          <Route exact path="/Productos" component={Productos}/>
          <Route exact path="/Pedidos" component={Pedidos}/>
          <Route exact path="/Galeria" component={Galeria}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
