import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
           <AppBar title="Detalles personales" />
            <TextField
              placeholder="Ingrese su País"
              label="País"
              onChange={handleChange('pais')}
              defaultValue={values.pais}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingrese su Ciudad"
              label="Ciudad"
              onChange={handleChange('ciudad')}
              defaultValue={values.ciudad}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Ingrese Código Postal"
              label="Código Postal"
              onChange={handleChange('codigopostal')}
              defaultValue={values.codigopostal}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Dirección de Entrega"
              label="Dirección"
              onChange={handleChange('direccion')}
              defaultValue={values.direccion}
              margin="normal"
              fullWidth
            />
            
            <TextField
              placeholder="Ingrese un Mensaje"
              label="Mensaje"
              onChange={handleChange('mensaje')}
              defaultValue={values.mensaje}
              margin="normal"
              fullWidth
            />


            {/*<br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />*/}

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Volver</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Siguiente</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;