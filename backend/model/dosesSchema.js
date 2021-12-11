const mongoose = require("mongoose")

const dosesSchema = new mongoose.Schema({
    estado: {
        type: String, 
    },
    doses: [{
        type:  String,
    }],
})

module.exports = mongoose.model("doses",  dosesSchema)