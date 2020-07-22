import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm.js';
import Success from './Success.js';

export class UserForm extends Component {
  state = {
    step: 1,
    nombre: '',
    apellido: '',
    email: '',
    telefono: 0,
    nacimiento: Date,
    infoWhatsApp: Boolean,

    pais: '',
    ciudad: '',
    codigopostal: '',
    direccion: '',

    mensaje:'',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleChangeCheck = input => e => {
    this.setState({ [input]: e.target.checked });
  };

  render() {
    const { step } = this.state;
    const { nombre, apellido, email, telefono, nacimiento, infoWhatsApp , pais, ciudad, codigopostal, direccion, mensaje } = this.state;
    const values = { nombre, apellido, email, telefono, nacimiento, infoWhatsApp , pais, ciudad, codigopostal, direccion, mensaje  };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleChangeCheck={this.handleChangeCheck}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;