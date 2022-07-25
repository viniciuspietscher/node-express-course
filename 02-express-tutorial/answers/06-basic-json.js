const express = require("express")
const app = express()
const PORT = 5000
const { products } = require("./data.js")

app.get("/", (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
