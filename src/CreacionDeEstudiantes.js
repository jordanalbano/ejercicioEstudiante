import React, { Component } from 'react'

export default class CreacionDeEstudiantes extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                nombre : "",
                apellido: "",
                dni : "",
                curso : ""
            },
            cursos:[],
            resultado : "",
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }      

    handleChange(e){
    let nombre = e.target.name;
    let valor = e.target.value;
    this.setState((state)=>({
        form: {
            ...state.form,[nombre] : valor,
        }, 

    }));


    }
//en el render se muestra lo que esta en el state

handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado con exito!",
        });
      });
  }
  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
        });
      });
  }
  
render() {
    return (
        <>
        <div>
            <form>
                <select name="cursos" onChange={this.handleChange}>
                {this.state.cursos.map((c) => (
              <option value={c.id}> Materia:  {c.nombre} , Cant horas:  {c.horas}</option>
            ))}
          </select>
           <label>nombre 
               <input 
                    type = "text"
                    name = "nombre"
                    onChange={this.handleChange} 
                    value={this.state.form.nombre}>
                </input>
           </label>
           <label>Apellido <input type = "text"  name = "apellido" onChange={this.handleChange} value={this.state.form.apellido} >
           </input></label>

           <button 
                onClick={this.handleSubmit} 
                type = "submit">
                    Enviar
           </button>
           <p>{this.state.resultado}</p>
           </form>
        </div>
        </>
    );
}
}
