const express = require("express")
const path = require("path")
const app = express()
const PORT = 5000

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
})

app.all("*", (req, res) => {
  res.status(400).send(`404 resource not found`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
