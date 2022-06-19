const EventEmitter = require("events")
const customEmitter = new EventEmitter()

customEmitter.on("response", (name, id) => {
  console.log(`data received\n user: ${name}\n id: ${id}`)
})

customEmitter.on("response", () => {
  console.log(`some other logic`)
})

customEmitter.emit("response", "john", 34)
