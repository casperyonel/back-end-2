const express = require('express')
const cors = require('cors')
const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js')
// this makes the callback function below link to controller.js

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/houses", getHouses)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)
app.delete("/api/houses/:id", deleteHouse)










let SERVER_PORT = 5050
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on ${SERVER_PORT}`)
})