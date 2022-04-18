import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Estudiante from "./Estudiante"
let jordan = {
  nombre: "Jordan", 
  apellido : "Albano",
  edad : 20,
  legajo : "287712",
  carrera : "Licenciatura en Sistemas",
  dni : 44041779,
  materias : [
    {materia: "Orientacion a objetos 2", hora: "4hrs semanales"},
    {materia : "matematica 2" , hora: "4hs semanales"},
    {materia: "Ing software 2", hora : "4hs semanales"},
    {materia:"Sist y organizaciones",hora: "4hs semanales"},
    ]
};

ReactDOM.render(
  <React.StrictMode>
  <Estudiante estudiante = {jordan} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
