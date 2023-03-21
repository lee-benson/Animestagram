import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/users.js'

const TOKEN_KEY = process.env.TOKEN_KEY

function getExpiration() {
  const d = new Date()
  d.setMinutes(d.getMinutes() + 30)
  return d.getTime()
}

const router = Router()

router.post('/signup', async (req, res) => {
  // handle user input
  const { username, password } = req.body
  // hash the password
  const hash = await bcrypt.hash(password, 10)
  // create new user
  const user = await User.create({
    username,
    hash,
  })

  const data = {
    id: user._id,
    exp: getExpiration(),
  }

  // sign the jwt
  const token = jwt.sign(data, TOKEN_KEY)

  // return the token
  return res.json(token)
})

router.post('/signin', async (req, res) => {
  // handle user input
  try {
    const { username, password } = req.body
    // Get user's password hash
    const user = await User.findOne({ username: username })
    const hash = user.hash

    // Check that the hashes match
    const result = await bcrypt.compare(password, hash)
    if (!result) {
      return res.status(401).json({
        message: 'Incorrect password'
      })
    }

    // Same code as signup from this point onwards

    const data = {
      id: user._id,
      exp: getExpiration(),
    }

    // sign the jwt
    const token = jwt.sign(data, TOKEN_KEY)

    // return the token
    return res.json(token)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
})

export default router