import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter, multiSelectFilter,  textFilter} from 'react-bootstrap-table2-filter';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export class Productos extends Component {

    productos = [ 
        {
            Interno:1,
            Nombre:'Tira de Asado',    
            Precio: 24,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:2,
            Nombre:'Vacio',    
            Precio:26,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:3,
            Nombre:'Chorizo',    
            Precio:26,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 1,
        },
        {
            Interno:4,
            Nombre:'Morcilla',    
            Precio:20,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 1,
        },
        {
            Interno:5,
            Nombre:'Molleja',    
            Precio:26,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:6,
            Nombre:'Chinchulin',    
            Precio:20,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:7,
            Nombre:'Entraña',    
            Precio:23,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:8,
            Nombre:'Colita de cuadril',    
            Precio:38,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:9,
            Nombre:'Tapa de Cuadril (Picaña/Picanha)',    
            Precio:42,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:10,
            Nombre:'Bondiola de cerdo',    
            Precio:18,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:11,
            Nombre:'Pierna de cordero',    
            Precio:39,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:12,
            Nombre:'Carne picada especial empanadas',    
            Precio:21,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:13,
            Nombre:'Matambre de Vaca',    
            Precio:23,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:14,
            Nombre:'Matambrito de Cerdo',    
            Precio:22,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:15,
            Nombre:'Peceto ',    
            Precio:36,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:16,
            Nombre:'Ojo de Bife',    
            Precio:50,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:17,
            Nombre:'Entrecote (origen Argentina)',    
            Precio:56,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:18,
            Nombre:'Lomo (origen Argentina)',    
            Precio:78,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:19,
            Nombre:'Milanesa ',    
            Precio:44,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:20,
            Nombre:'Costillar de cerdo (*)',    
            Precio:24,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 0,
        },
        {
            Interno:21,
            Nombre:'Bolsa de carbón 10kg (origen Argentina)',    
            Precio:23,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 3,
        },
        {
            Interno:22,
            Nombre:'Yerba',    
            Precio:23,
            Detalle:'detalles...',
            Imagen:'Img...',
            Rubro: 2,
        }
     ];


    render() {

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
                Productos

                <BootstrapTable
                    bootstrap4
                    keyField='Interno' 
                    data={ this.productos }
                    columns={ columns } 
                    defaultSorted={ defaultSorted }  
                    noDataIndication="No hay datos para mostrar" 
                    bordered={ false }
                    filter={ filterFactory()}
                />
            </div>
        )
    }
}

export default Productos
