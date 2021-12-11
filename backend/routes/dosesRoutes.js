const express = require("express")
const router = express.Router()
const Doses = require("../model/dosesSchema")


router.get("/doses", async (req, res) => {
  try {
    const doses = await Doses.find()
    res.json(doses)
  }catch(err) {
      res.json({message: err})
  }  
})


module.exports = router  