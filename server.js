import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json()) //middleware function

const list = []

server.get('/', (req, res) => {
  console.log('Ich habe einen request bekommen')
  res.json(list)
})

server.post('/data', (req, res) => {
  list.push(req.body)
  console.log(list)
})

server.listen(4000, () =>
  console.log('Server started on http://localhost:4000')
)
