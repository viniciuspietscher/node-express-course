const http = require("http")

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write("home page")
    res.end()
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write("about page")
    res.end()
  } else {
    res.writeHead(404, { "content-type": "text/html" })
    res.end("<h1>404 page</h1>")
  }
})

server.listen(5000)
