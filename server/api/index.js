import 'dotenv/config'
import '../db/connection.js'
import express from 'express'
import morgan from 'morgan'
import postRouter from '../routes/posts.js'
import userRouter from '../routes/users.js'
import authRouter from '../routes/auth.js'
import cors from 'cors'
import lifecycle from './middleware/lifecycle.js'

const PORT = process.env.PORT || 8080;

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(lifecycle({
  async setup() {
    // This runs before all your handlers
    // Put your database connection here. e.g.
    // mongoose.set('strictQuery', false)
    // await mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    // This runs after all your handlers
    // Put your database disconnection here. e.g.
    // await mongoose.disconnect()
  }
}))

app.use('/api/post/', postRouter)
app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)

app.listen(PORT, () => {
  console.log(`This bih is running on http://localhost:${PORT} type beat`);
})

