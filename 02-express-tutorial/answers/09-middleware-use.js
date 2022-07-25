const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")
const PORT = 5000

app.use([logger, authorize])

app.get("/", (req, res) => {
  res.send("Home")
})

app.get("/about", (req, res) => {
  res.send("About")
})

app.get("/api/products", (req, res) => {
  res.send("products")
})

app.get("/api/items", (req, res) => {
  console.log(req.user)
  res.send("items")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
