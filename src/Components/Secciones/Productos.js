import React, { Component, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter, multiSelectFilter,  textFilter} from 'react-bootstrap-table2-filter';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useTranslation } from 'react-i18next';
import ProducFR from './ProductosFR.json';
import ProducES from './ProductosES.json'

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
                sort: true
            },             
            {
                dataField: 'Nombre',
                text: 'Nombre',    
                sort: true        
            },    
            {
                dataField: 'Precio',
                text: 'Precio',
                sort: true,
                align: 'center',
                formatter: (cell) => 
                    <span>
                        CHF  { cell }
                    </span>
            },
            {
                dataField: 'Detalle',
                text: 'Detalle',
            },
            {
                dataField: 'Imagen',
                text: 'Imagen',
            },
            {
                dataField: 'Rubro',
                text: 'Rubro',
                formatter: cell => selectOptions[cell],
                filter: 
                    selectFilter({
                        options: selectOptions,
                        placeholder: 'Todos',
                        withoutEmptyOption: false,
                    })
            }];


            const defaultSorted = [{
                dataField: 'Nombre',
                order: 'desc'
            }];
        return (
            <div>

                <BootstrapTable
                    bootstrap4
                    keyField='Interno' 
                    data= {i18n.language ==='es'? state.productosES : state.productosFR}
                    columns={ columns } 
                    defaultSorted={ defaultSorted }  
                    noDataIndication="No hay datos para mostrar" 
                    bordered={ false }
                    filter={ filterFactory()}
                />
            </div>
        )
}

export default Productos
