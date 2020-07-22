import React, { useState } from 'react'
import Flags from 'country-flag-icons/react/3x2'
import { UserForm } from './Formulario/UserForm.js';
import BackgroundOptions from './Utiles/BackgroundOptions.js'
import './Utiles/BackgroundOptions.css'

 const Pedidos = () => {


    const [bg, setBg] = useState("bg1");
    const pedidosClass = bg

    return (

      <div className={pedidosClass} style={{color:'white'}}>
      
        {/*<div style={{float: "right"}}>
          <BackgroundOptions setBg={setBg} />
        </div>*/}

        <div className="bg">
      
          <h1>En qué consiste y cómo funciona?</h1>
          <h4>Muy fácil, hacés tu pedido por Mail, WhatsApp, o Teléfono y te entregamos en el domicilio que nos digas.</h4>

          <h4>Tel./WhatsApp: +41 77 522 01 27</h4>
          <h4>E-Mail: sentiargentino@gmail.com</h4>

          <UserForm />
        </div>
    </div>
    );
  }

  export default Pedidos;