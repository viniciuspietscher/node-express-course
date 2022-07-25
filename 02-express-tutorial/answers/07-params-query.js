const express = require("express")
const app = express()
const PORT = 5000
const { products } = require("./data")

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.id)
  )
  if (!singleProduct) {
    res.send("product does not exist")
  }
  res.json(singleProduct)
})

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params)
  res.send("hello")
})

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    )
  }
  if (limit) {
    singleProduct = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }
  return res.status(200).json(sortedProducts)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
