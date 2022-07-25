const consoleLog = (req, res, next) => {
  console.log(`function consoleLog() has been invoked`)
  next()
}

module.exports = consoleLog
