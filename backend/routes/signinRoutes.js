const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../model/userSchema")

router.post("/signup", async(req, res) => {
  const { email } = req.body

  try {
      if ( await User.findOne({ email }))
      return res.status(400).send({ error: "user already exists"})

      const user =  await User.create(req.body)

      
      return res.send({ user }) 
  }catch (err) {
      return res.status(400).send({ error: "Registration failed"})
  }
})
  
  
   
module.exports = router