

const http = require('http');
const { logger } = require('./modules/logger');

require('dotenv').config()

const port = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {  
  logger(req)

  res.statusCode = 200
  res.end('Hello world')
})

server.listen(port, () => {
  console.log(`🔌 Connecté sur le port ${port}`)
})