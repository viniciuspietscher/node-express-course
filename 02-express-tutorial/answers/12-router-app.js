const express = require("express")
const app = express()

const people = require("./routes/people")
const auth = require("./routes/auth")

const PORT = 5000

// static assets
app.use(express.static("./methods-public"))

// parse form data
app.use(express.urlencoded({ extended: "false" }))

// parse json
app.use(express.json())

app.use("/api/people", people)
app.use("/login", auth)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
