import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {Link} from 'react-router-dom';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/">Sentimiento Argentino</Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/Inicio">Inicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
                <li><Link to="/Pedidos">Pedidos</Link></li>
                <li><Link to="/Galeria">Galeria</Link></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;