const mongoose = require("mongoose")

const quarentenaSchema = new mongoose.Schema({
    email: {
        type: String, 
    },
    nome: {
        type: String, 
    },
    numero: {
        type: String, 
    },
    dtCovid: {
        type: String, 
    },
    dtQuarentena: {
        type: String,
    },
    lugarCovid: {
        type: String,
    }, 
    vacina: {
        type: String,
    },
    numPessoas: {
        type: Number,
    },
    sintomas: {
        type: String,
    },

})

module.exports = mongoose.model("quarentena",  quarentenaSchema) 