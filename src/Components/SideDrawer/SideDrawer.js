import React from 'react';

import './SideDrawer.css';
import {Link} from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
            <li><Link to="/Inicio">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Pedidos">Pedidos</Link></li>
            <li><Link to="/Galeria">Galeria</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;