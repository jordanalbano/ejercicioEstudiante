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
        cursos: [],
        cantidadDeHs : [],
        cursoObj: [
            {
            nombre: "Orientacion a Objetos 2",
            cantHs: "4 hs semanales",
            },
        ],
        };
        this.inscribirse = this.inscribirse.bind(this);
    }      

    inscribirse(e) {
        
        e.preventDefault();
        this.setState((state) => ({
        cursoObj: [
            ...state.cursoObj,
            {
            nombre: "Ingenieria De Software 2",
            cantHs: "5 hs semanales",
            },
        ],
        }));
    }
    listarEstudiantes(e){

    }
//en el render se muestra lo que esta en el state


render() {
    return (
        <>
        <div>
            <p>estudiante: {this.state.nombre + " " + this.state.apellido}</p>
            <p>edad : {this.state.edad}</p>
            <p>dni : {this.state.dni}</p>
            <p>legajo : {this.state.apellido}</p>

            <p>Cursos</p>

            <table border="1px">
            <tr>
                <td> Cursos </td>
                <td> Cantidad de Horas </td>
            </tr>
            {this.state.cursoObj.map((curso) => (
                <tr>
                <td>{curso.nombre}</td>
                <td>{curso.cantHs}</td>
                </tr>
            ))}
            <tr></tr>
            </table>
            <button onClick={this.inscribirse}>Inscribirme</button>
        </div>
        </>
    );
}
}
