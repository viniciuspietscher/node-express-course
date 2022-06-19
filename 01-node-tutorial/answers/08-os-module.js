const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user)

// system uptime
console.log(`uptime: ${os.uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  OS: os.type(),
}
console.log(currentOS)
