import React, { Component } from 'react'
import "./Persona.css"
export default class Persona extends Component {
   /* 4 Crear un componente Estudiante, 
    que se dibuje en pantalla con sus datos personales, sobre un div con borde y fondo gris claro.*/

render() {
    let obj = {

        nombre  : "jordan",
        apellido : "albano",
        dni : 15,
        legajo : 1,
        edad : 18,
    };

    return (
    <div className="estilo">
        <p > nombre: {obj.nombre}   </p>
        <p>apellido: { obj.apellido}</p>
        <p>edad: {obj.edad}</p>
        <p>legajo : {obj.legajo}</p>
        <p>dni: {obj.dni}</p>


    </div>
    )
}
}
