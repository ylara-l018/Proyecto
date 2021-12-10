//Endpoints del proyecto
//Endpoint: Ruta REST en un proyecto API Backend
// Ej: http://localhost:5000/personas/4
//          Un endpoint solo exponen info en formato JSON
import { addmascotas,
        getmascotas, 
        getmascotasById, 
        deletemascotas } from "../controllers/ContactoController.js"

const rutas = (  app ) => {
        app.route('/mascotas')
                  .get(getmascotas)
                  .post (addmascotas)
        app.route('/mascotas/:mascotasid')   
                  .get(getmascotasById) 
                  .delete(deletemascotas)      
}

export default rutas

