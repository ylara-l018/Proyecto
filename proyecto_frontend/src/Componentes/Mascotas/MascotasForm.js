import React, { Component } from "react";
import axios from 'axios';

class MascotasForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevamascotas(event){
            //Prevenga el comportamiento por defecto del submit
            event.preventDefault()
            //enviar request al backend via axios
            axios.post('http://localhost:5000/mascotas' , 
                        {
                            tipo: this.refs.tipo.value,
                            raza: this.refs.raza.value,
                            nombre: this.refs.nombre.value

                        }
                    ).then( (respuesta)=> console.log(respuesta) )
                     .catch( error => console.log(error) )
                    
    }

    render(){
        return(

        <div className="row">
            <h5> Registrar una mascota</h5>
            <form className="col s12" onSubmit={this.submitNuevamascotas.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="tipo" type="text" ref="tipo" />
                        <label htmlFor="tipo">Tipo</label>
                    </div>
                    <div className="input-field col s6">
                        <input  id="raza" type="text" ref="raza" />
                        <label htmlFor="raza">raza</label>
                    </div>
                </div>
                
                    <div className="input-field col s6">
                        <input  id="nombre" type="text" ref="nombre" />
                        <label htmlFor="nombre">nombre</label>
                    </div>
                    <div className="input-field col s6">
                        <button name="action"
                                type = "submit"
                                className = "btn waves-effect waves-light blue"

                        > Registrar

                        </button>
                    </div>
               
            </form>
        </div>
    )
}
}

export default  MascotasForm 
