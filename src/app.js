const express = require('express');
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'https://code-reviewer-frontend.vercel.app' 
  }))
  
const aiRoutes = require('./routes/ai.routes')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app