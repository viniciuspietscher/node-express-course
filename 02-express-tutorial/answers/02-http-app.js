const http = require("http")
const { readFileSync } = require("fs")

// get files
const homePage = readFileSync("./navbar-app/index.html")
const javascript = readFileSync("./navbar-app/browser-app.js")
const logo = readFileSync("./navbar-app/logo.svg")
const styles = readFileSync("./navbar-app/styles.css")

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homePage)
    res.end()
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" })
    res.write(styles)
    res.end()
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" })
    res.write(javascript)
    res.end()
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" })
    res.write(logo)
    res.end()
  } else {
    res.writeHead(404, { "content-type": "text/html" })
    res.end("<h1>404 page</h1>")
  }
})

server.listen(5000)
