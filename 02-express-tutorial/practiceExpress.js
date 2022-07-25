const express = require("express")
const path = require("path")
const app = express()
const consoleLog = require("./practice-middleware")
const PORT = 3000

app.use(consoleLog)

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./new-public/index.html"))
})

app.get("/sample", (req, res) => {
  res.send(`This is working.`)
})

app.all("*", (req, res) => {
  res.status(404).send("resource not found")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
