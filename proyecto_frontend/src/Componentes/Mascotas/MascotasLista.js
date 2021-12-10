import React from 'react'

const MascotasLista = ( props ) => {
    return ( 
        <ul className="collection with-header deep-pink accent-2">
            <li className="collection-header deep-light blue accent-2"><h4> Mascotas: </h4></li>
            {
               props.listamascotas.map( ( item )=> {  
                    return(
                        <a
                            href="#!"
                            className="collection-item" 
                            key = { item._id }
                            onClick = { props.actualizarmascotasActual.bind(this, item) }
                            
                        >
                            { item.nombre }    { item.raza }
                        </a>
                    )
                } ) 
            }       
       </ul>
      
    )

}

export default MascotasLista