import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Cursos from "./Cursos"
let jordan = {
  /*nombre: "Jordan", 
  apellido : "Albano",
  edad : 20,
  legajo : "287712",
  carrera : "Licenciatura en Sistemas",
  dni : 44041779,*/
  
  materias : [ "Orientacion a objetos 2", "matematica 2", "Ing software 2","Sist y organizaciones" ],
}

ReactDOM.render(
  <React.StrictMode>
  <Cursos cursos = {jordan} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
