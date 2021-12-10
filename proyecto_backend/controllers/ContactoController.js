import mongoose from 'mongoose'
import mascotasSchema from '../models/ContactoModel.js'

//DAO de Contacto
const mascotas = mongoose.model('mascotas' , mascotasSchema)

//accion de controlador: insertar nueva Persona
export const addmascotas = ( request , response ) => {
    //crear nueva Persona:
    let nuevamascota = new mascotas( request.body )
    //grabar la nueva persona
    nuevamascota.save( (error , mascotas) => {
        if(error){
            response.send(error)
        }else{
            response.json(mascotas)
        }
    })
}

//accion para seleccionar todas las personas
export const getmascotas = (request , response) => {
    mascotas.find( {} ,   (error , mascotas) => {
        if(error){
            response.send(error)
        }else{
            response.json(mascotas)
        }
    }   )
}

//accion de detalle de persona
export const getmascotasById = (request , response ) => {
    mascotas.findById( request.params.mascotasid ,   (error , mascotas) => {
        if(error){
            response.send(error)
        }else{
            response.json(mascotas)
        }
    }   )
}

//accion borrar: 
export const deletemascotas = (request , response ) => {
    mascotas.deleteOne( { _id: request.params.mascotasid } , (error ,mascotas ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "mascota eliminada"})
           } 
    })
}



