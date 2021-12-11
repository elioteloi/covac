const express = require("express")
const router = express.Router()
const Quarentena = require("../model/quarentenaSchema")



router.post("/quarPost", async(req, res) => {
  const { vacina } = req.body

  try {
      const quarentena =  await Quarentena.create(req.body)

      
      return res.send({ quarentena })
  }catch (err) {
      return res.status(400).send({ error: "Registration failed"})
  }
})

router.get("/quarGet", async (req, res) => {
  try {
    const quarentena = await Quarentena.find()
    res.json(quarentena)
  }catch(err) {
    res.json({message: err})
  }
})

router.delete("/quarDelete", async (req, res) => {
  const quarentena = Quarentena.deleteOne({body: req.params.body}, (error) => {
    if(error) return res.status(400).json({
      error:true,
      message: "error"
    })
  })
  return res.json({
    error: false,
    message: "SUCCESS"
  })
})


module.exports = router  