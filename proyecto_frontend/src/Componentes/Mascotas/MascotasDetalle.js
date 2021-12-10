import React from 'react'
import axios from 'axios'
const MascotasDetalle = (props) => {
  const remove = (_id) => {
    axios.get(`http://localhost:5000/mascotas/delete/${_id}`)
      .then(function(response) {
        this.setState({
          filtered: response
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  return ( 
        <div class="row">
    <div class="col s12 m6">
      <div class="card cyan ">
        <div class="card-content white-text">
          <span class="card-title">{props.mascotas.nombre} {props.mascotas.tipo}</span>
          <p>Tipo: {props.mascotas.tipo}</p>
          <p>Raza:  {props.mascotas.raza}</p>
          <p>Nombre: {props.mascotas.nombre}</p>
        </div>
        <div class="card-action">
              
              <button type="submit" onClick={remove.bind(this, props.mascotas._id)} className="waves-effect waves-light blue btn" > Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )
  
  }
  
  
  export default MascotasDetalle