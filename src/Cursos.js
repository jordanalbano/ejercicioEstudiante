import React, { Component } from 'react'

export default class Cursos extends Component {
    constructor(props){
        super(props);
        this.state ={
            cursos : [],
            resultado : "hgo"
            
        };
        this.listarCursos = this.listarCursos.bind(this);
        this.limpiar = this.limpiar.bind(this);
        this.listarCursoDeEstudiante = this.listarCursoDeEstudiante.bind(this);


    }
listarCursoDeEstudiante(){
    fetch("http://localhost:1234/estudiantes/")
    .then((resp) => resp.json())
    .then((json) => {
        this.setState({
            cursos: json.estudiantes[0].cursos,
            resultado: json.result,
        });
    });
}

listarCursos() {
        fetch("http://localhost:1234/cursos")
        .then((resp) => resp.json())
        .then((json) => {
            this.setState({
            cursos: json.cursos,
            resultado: json.result,
            });
        });
        
}

limpiar(){
    this.setState({
        cursos : [],
        
    });
}
render() {
    return ( 
    <div>
         <button className="button" onClick={this.listarCursos}>
            Listar Cursos
          </button>
          <button className="button" onClick={this.limpiar}>
            Limpiar
          </button>
          <button className="button" onClick={this.listarCursoDeEstudiante}>
            Listar cursos de estudiante X
          </button>

        <table border="1px">
            <thead>
            <tr>
                <th> Cursos </th>
                <th> Cantidad de Horas </th>
                <th>resultado</th>
            </tr>
            </thead>
            
        <tbody>  
            {this.state.cursos.map((c) => (
            <tr>
                <td >{c.nombre}</td>
                <td >{c.horas}</td>
                <td>{this.state.resultado}</td>
            </tr>
            ))}

            
            
            
                   
        </tbody>
            </table>
            
        
    </div>
    );
}
}
