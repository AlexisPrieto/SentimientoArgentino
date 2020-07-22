import React, { useState } from 'react'
import './BackgroundOptions.css'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
  

function BackgroundOptions({setBg}) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    
  let fondo = {
    id: 1,
    nombre: "1"
  };

  const fondos = [

    {
      id:1,
      nombre: "bg1"
    },
    {
      id:2,
      nombre: "bg2"
    },
    {
      id:3,
      nombre: "bg3"
    },
    {
      id:4,
      nombre: "bg4"
    },
    {
      id:5,
      nombre: "bg5"
    },
  ];

  const getFondoIndex = (id, fondos) => {
        for (let i = 0; i < fondos.lenght; i++){
            if(fondos[i].id === id){
                return i;
            }
        }
        return "";
  };

  const classes = useStyles();

  const [selectedBackground, setSelectedBackground] = useState(fondo);

  const handleChange = (event) => {
      setSelectedBackground(event.target.value)
      console.log("valor: "+event.target.value)
      setBg(event.target.value)
  };

  return (
    <div >
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Fondo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fondos[getFondoIndex(selectedBackground.nombre, fondos)]}
          onChange={handleChange}
          lebel="fondo"
          >

          {fondos.map(fond => {
            return(
              <MenuItem key={fond.id} value={fond.nombre}>{fond.nombre}</MenuItem>
            )
          })}
        </Select>
      </FormControl>

      {/*<p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">

      </label>*/}
    </div>
  )
}

export default BackgroundOptions