/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import "./Estudiante.css"
export default class Estudiante extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
        nombre : this.props.estudiante.nombre,
        apellido: this.props.estudiante.apellido,
        dni : this.props.estudiante.dni,
        legajo : this.props.estudiante.legajo,
        edad : this.props.estudiante.edad,
        cursos: ["Orientacion a objetos 2",""],
        cantidadDeHs : ["4 hrs semanales",""],
        };

        this.inscribirse = this.inscribirse.bind(this);
    }      

    inscribirse(e){
        e.preventDefault();
        this.setState((state)=>({
            cursos: [this.state.cursos[0], "ingenieria de software"],
            cantidadDeHs : [this.state.cantidadDeHs[0],"5 hs semanales"],
        }));
        
    
}
//en el render se muestra lo que esta en el state

render() {
    return (
        <>
        <div>
        <p>estudiante: {this.state.nombre +" " +  this.state.apellido}</p>
        <p>edad : {this.state.edad}</p>
        <p>dni : {this.state.dni}</p>
        <p>legajo : {this.state.apellido}</p>

        <p>Cursos</p>
        
        <table border="1px"> 
            <tr> 
                    <tr> 
                        < td> Cursos </td>
                        < td> Cantidad de Horas </td>
                    </tr>
                    <tr>
                        <td> {this.state.cursos[0]} </td>
                        <td> {this.state.cantidadDeHs[0]} </td>
                    </tr>
                    <tr>
                        <td> {this.state.cursos[1]} </td>
                        <td> {this.state.cantidadDeHs[1]} </td>
                    </tr>
            </tr>
            <tr>
            </tr>
    </table>
            <button onClick={this.inscribirse}>Inscribirme</button>
        </div>
        </>
    );
}
}
