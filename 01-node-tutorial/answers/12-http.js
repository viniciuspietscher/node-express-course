const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome")
  } else if (req.url === "/about") {
    res.end("About")
  } else {
    res.end(`
    <h1>oops 404</h1>
    <a href="/">home</a>`)
  }
})

server.listen(5000)
