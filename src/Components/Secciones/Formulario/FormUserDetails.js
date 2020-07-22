import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {TextField, Checkbox, FormControlLabel, FormControl, InputLabel, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from "material-ui-phone-number";


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleChangeCheck } = this.props;
    return (
      <MuiThemeProvider>
        <>
            {/*<AppBar title="Enter User Details" />*/}
            <TextField
              placeholder="Ingrese su Nombre"
              label="Nombre* (Requerido)"
              onChange={handleChange('nombre')}
              defaultValue={values.nombre}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingrese su Apellido"
              label="Apellido* (Requerido)"
              onChange={handleChange('apellido')}
              defaultValue={values.apellido}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingrese su Email"
              label="Email* (Requerido)"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
        
            <TextField
              placeholder="Ingrese su Fecha de Nacimiento"
              label="Fecha de Nacimiento"
              onChange={handleChange('nacimiento')}
              defaultValue={values.nacimiento}
              margin="normal"
              fullWidth
            />
            <br />

            {/*<MuiPhoneNumber
              label="Teléfono"
              onChange={handleChange('telefono')}
              defaultValue={values.telefono}
              margin="normal"
              
            />*/}
            <FormControl>
              <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
              <Input
                value={values.textmask}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                //inputComponent={TextMaskCustom}
              />
            </FormControl>

            <FormControlLabel
                control={
                  <Checkbox
                    defaultValue={values.infoWhatsApp}
                    onChange={handleChangeCheck('infoWhatsApp')}
                    color="primary"
                  />
                }
                label="Recibir Noticias por WhatsApp?"
              />
              <br />

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

export default FormUserDetails;