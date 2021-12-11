const express = require("express")
const router = express.Router()
const Paises = require("../model/paisesSchema")


router.get("/paises", async (req, res) => {
  try {
    const paises = await Paises.find()
    res.json(paises)
  }catch(err) {
      res.json({message: err})
  }  
})


module.exports = router  