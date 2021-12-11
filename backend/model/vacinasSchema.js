const mongoose = require("mongoose")

const vacinasSchema = new mongoose.Schema({ 
    vacina: {
        type: String, 
    },
    paises: [{
        type:  String,
    }],
})

module.exports = mongoose.model("vacinas",  vacinasSchema)