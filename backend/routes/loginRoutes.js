const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../model/userSchema")


router.post("/login", async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.send({ user })
    }catch (err) {
        return res.status(400).send({ error: "Register failed" })
    }
})


  
module.exports = router