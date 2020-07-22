import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { nombre, apellido, email, telefono, nacimiento, infoWhatsApp , pais, ciudad, codigopostal, direccion, mensaje }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Nombre" secondary={nombre} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Apellido" secondary={apellido} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Teléfono" secondary={telefono} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nacimiento" secondary={nacimiento} />
              </ListItem>
              <ListItem>
                <ListItemText primary="País" secondary={pais} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ciudad" secondary={ciudad} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Código Postal" secondary={codigopostal} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dirección de Entrega" secondary={direccion} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mensaje" secondary={mensaje} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Volver</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirmar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;