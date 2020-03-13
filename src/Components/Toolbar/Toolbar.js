import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flags from 'country-flag-icons/react/3x2'


const Toolbar = props => {

  const { t, i18n } = useTranslation(['translation']);
 
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  return (

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
                
                <button type="button" onClick={props.lngEs}>
                  <Flags.ES title="Es" className="..."/>
                  {t('translation:es')}
                </button>

                <button type="button" onClick={props.lngFr}>
                  <Flags.FR title="Fr" className="..."/>
                  {t('translation:fr')}
                </button>

            </ul>
        </div>
    </nav>
  </header>
);
  };

export default Toolbar;