import React, {Component} from 'react'
import axios from 'axios'
import MascotasLista from './Mascotas/MascotasLista.js';
import MascotasDetalle from './Mascotas/MascotasDetalle.js';
import MascotasForm from './Mascotas/MascotasForm.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      mascotas: [],
      mascotasActual : {}
      
    }

    //vincular la funcion de actualizar al componente
    this.actualizarmascotasActual = this.actualizarmascotasActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
      const url = "http://localhost:5000/mascotas"
      axios.get(url)
          .then((respuesta) => {   
              this.setState({
                 mascotas: respuesta.data
              })
              console.log(respuesta.data)
          })
          .catch((error) => { console.log(error) })
  }



  //Establecer la persona a ver detalle
  actualizarmascotasActual(mascotas){
    //actualizar state:
    this.setState({
      mascotasActual: mascotas
    })
  }

  render(){
    return (
      <div className="container-fluid">
          <div className="row" > 
              <div className="col s12">
                <nav>
                  <div class="nav-wrapper cyan">
                    <a href="#!" class="brand-logo center"> Mascotas</a>
               
                  </div>
                </nav>
              </div>
          </div>
          <div className="row" >
              <div className="col s3">
                  <MascotasLista
                          listamascotas={ this.state.mascotas } 
                          actualizarmascotasActual = { this.actualizarmascotasActual }  
                 />
              </div>
              <div className="col s9">
                  <MascotasDetalle  mascotas={ this.state.mascotasActual  }  />
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <MascotasForm />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
