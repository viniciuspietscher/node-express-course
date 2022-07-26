const express = require("express")
const app = express()
require("dotenv").config()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

app.use("/api/v1/tasks", tasks)

app.get("/hello", (req, res) => {
  res.send("Task manager app")
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
