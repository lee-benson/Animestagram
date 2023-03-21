import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

export default async function verifyAuth(req, res, next) {

  const token = req.headers.authorization
  console.log(token)
  if (!token) {
    return res.status(401).json({
      message: 'Gotta sign in'
    })
  }

  // verify token and extra the user's info
  const data = jwt.verify(token, TOKEN_KEY)

  req.id = data.id
  next()
}