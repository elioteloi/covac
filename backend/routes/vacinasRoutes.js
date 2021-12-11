const express = require("express")
const router = express.Router()
const Vacinas = require("../model/vacinasSchema") 

router.get ("/vacinas", async (req, res) => {
  try {
    const vacinas = await Vacinas.find()
    res.json(vacinas)
  }catch(err) {
      res.json({message: err})
  }  
})


module.exports = router