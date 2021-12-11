const express = require("express")
require("./db/db")
require("dotenv").config()
const app = express()

const vacinasRoute = require("./routes/vacinasRoutes")
const paisesRoute = require("./routes/paisesRoutes")
const loginRoutes = require("./routes/loginRoutes")
const signinRoutes = require("./routes/signinRoutes")
const quarentenaRoutes = require("./routes/quarentenaRoutes")
const dosesRoutes = require("./routes/dosesRoutes")
const PORT = process.env.PORT || 8000

app.use(express.json()) 

app.use("/", paisesRoute)

app.use("/", vacinasRoute)

app.use("/",loginRoutes)
 
app.use("/",signinRoutes)
 
app.use("/", quarentenaRoutes)

app.use("/", dosesRoutes)

app.get("/home", (req, res) => {
    res.json({success: true, message: "BACK-END-LOGIN !!!"})
}) 

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})