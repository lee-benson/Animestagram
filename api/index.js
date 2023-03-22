import 'dotenv/config'
import '../server/db/connection.js'
import express from 'express'
import morgan from 'morgan'
import postRouter from '../server/routes/posts.js'
import userRouter from '../server/routes/users.js'
import authRouter from '../server/routes/auth.js'
import cors from 'cors'
// import lifecycle from './middleware/lifecycle.js'

const PORT = process.env.PORT || 8080;

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/post/', postRouter)
app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)

app.listen(PORT, () => {
  console.log(`This bih is running on http://localhost:${PORT} type beat`);
})

