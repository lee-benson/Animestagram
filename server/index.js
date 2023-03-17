import 'dotenv/config'
import './db/connections.js'
import express from 'express'
import morgan from 'morgan'
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import cors from 'cors'
const PORT = process.env.PORT || 8080;

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/post/', postRouter)
app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)

// app.use('/api/user/', userRouter)


app.listen(PORT, () => {
  console.log(`This bih is running on http://localhost:${PORT} type beat`);
})

