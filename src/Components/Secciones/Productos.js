import React, { Component, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter, multiSelectFilter,  textFilter} from 'react-bootstrap-table2-filter';
import '../Toolbar/Toolbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useTranslation } from 'react-i18next';
import ProducFR from './ProductosFR.json';
import ProducES from './ProductosES.json'
import { render } from '@testing-library/react';
import number from 'react-bootstrap-table2-filter/lib/src/components/number';
import './Productos.css'
import './Utiles/BackgroundOptions.css'
import BackgroundOptions from './Utiles/BackgroundOptions.js'

const Productos = () => {

        const { i18n } = useTranslation(['translation']);

        const [state, setState] = useState({
            productosES: ProducES.Productos.Productos,
            productosFR: ProducFR.Productos.Productos,
            
        });

        
        const selectOptions = {
            0: 'Carne',
            1: 'Embutidos',
            2: 'Yerbas',
            3: 'Otros',
          };

        const columns = [
            {
                dataField: 'Interno',
                text: '#',
                hidden: true,
            },             
            {
                dataField: 'Nombre',
                text: 'Nombre',    
                //sort: true        
            },    
            {
                dataField: 'Precio',
                text: 'Precio',
                //sort: true,
                headerAlign: 'center',
                align: 'center',
                formatter: (cell) => 
                    <span>
                        CHF  { cell }
                    </span>
            },
            {
                dataField: 'Detalle',
                text: 'Detalle',
                hidden: true,
            },
            {
                dataField: 'Imagen',
                text: 'Imagen',
                hidden: true,
            },
            {
                dataField: 'Rubro',
                text: 'Rubro',
                hidden: true,
                formatter: cell => selectOptions[cell],
                filter: 
                    selectFilter({
                        options: selectOptions,
                        placeholder: 'Todos',
                        withoutEmptyOption: false,
                    })
            }];

            const expandRow = {
                onlyOneExpanding: true,
                renderer: row => {
                    if (i18n.language ==='fr'){
                        return (
                            <div style={{padding: '0% 0% 0% 7%'}}>
                                <p>{`${row.Detalle}`}</p>
                            </div>)
                    }else{
                        return (
                            <div  style={{padding: 0}}>
                            </div>
                            )
                    }
                },
                
                nonExpandable: i18n.language ==='es' ? [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]: []

              };       

            const defaultSorted = [{
                dataField: 'Nombre',
                order: 'desc'
            }];
            
            const selectRow = {
                mode: 'radio',
                clickToSelect: true,
                /*style: { background: 'linear-gradient(to top, #78b9ff, #a9d3ff, #daebff, rgb(241, 247, 255), rgb(255, 255, 255), rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255), rgb(255, 255, 255))', 'font-weight': 'bolder'},*/
                style: {'font-weight': 'bolder'},
                /*style: { background: 'linear-gradient(to top, #2692ff, #ffffff )', 'font-weight': 'bolder'},*/
                clickToExpand: true
              };
             
              const [bg, setBg] = useState("bg1");
              const pedidosClass = bg      

        return (
            <>
                
                <div className={pedidosClass} style={{'text-align': '-webkit-center', color: 'white'}}>
                    <h1>Productos</h1>
                    <h5>Precio por Kilo</h5>

                    <div  className="productos_tabla">
                        <BootstrapTable
                        
                            bootstrap4
                            keyField='Interno' 
                            data= {i18n.language ==='es'? state.productosES : state.productosFR}
                            columns={ columns } 
                            expandRow={expandRow}
                            defaultSorted={ defaultSorted }  
                            noDataIndication="No hay datos para mostrar" 
                            bordered={ false }
                            filter={ filterFactory()}
                            selectRow={ selectRow }
                        />
                    </div>
                </div>
            </>
        )
}

export default Productos
