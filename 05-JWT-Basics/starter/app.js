require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const mainRouter = require("./routes/main")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1", mainRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("Please provide a JWT_SECRET")
    }
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
