const jwt = require("jsonwebtoken")
const UnauthenticatedError = require("../errors/unauthenticated")

const authenticationMiddleware = async (req, res, next) => {
  // const authHeader = req.headers.authorization
  // if (!authHeader || !authHeader.startsWith("Bearer")) {
  //   throw new UnauthenticatedError("No token provided")
  // }
  // const token = authHeader.split(" ")[1]
  const token = req.headers.authorization.match(
    /[\w]{1,}\.[\w]{1,}\.[\w]{1,}/g
  )[0]
  if (!token) {
    throw new UnauthenticatedError("No token provided")
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    throw new UnauthenticatedError("Not authorized")
  }
}

module.exports = authenticationMiddleware
