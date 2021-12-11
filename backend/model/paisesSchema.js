const mongoose = require("mongoose")

const paisSchema = new mongoose.Schema({
    pais: {
        type: String, 
    },
    vacinas: [{
        type:  String,
    }],
})

module.exports = mongoose.model("paises",  paisSchema)