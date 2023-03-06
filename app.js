const fs = require('fs')
const url = require('url')
const http = require('http');
const { logger } = require('./modules/logger');

require('dotenv').config()

const port = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {  
  const { pathname } = url.parse(req.url)

  const page = pathname
  
  logger(req)
  console.log(page)

  fs.readdir('./pages', (err, pages) => {
    if (err) throw err;
    
    if (req.url === '/') {
      res.statusCode = 200
      res.setHeader('content-type', 'text/html')

      fs.readFile('./pages/home.html', (err, data) => {
        if (err) throw err;
        res.end(data)
      })
    }
    
    const currentPage = pages.filter((page) => page.split('.')[0] === req.url.slice(1))

    if (currentPage) {
      res.statusCode = 200
      res.setHeader('content-type', 'text/html')

      fs.readFile(`./pages/${currentPage}`, (err, data) => {
        res.end(data)
      })
    }

    res.statusCode = 404
  })

 

})

server.listen(port, () => {
  console.log(`🔌 Connecté sur le port ${port}`)
})