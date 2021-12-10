import mongoose from 'mongoose'

//Definir un objeto Schema 
const Schema = mongoose.Schema

//Definir la estructura de las entidades 
//a registrar

const mascotasSchema = new Schema(
    {
        tipo: {
            type: String,
        },
        raza: {
            type: String,
            required: "raza vacio"
        },
        nombre: {
            type:String,
            required: "nombre vacio"
        },

    }
)

export default mascotasSchema