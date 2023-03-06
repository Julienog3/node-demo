const fs = require('fs');
const url = require('url')

module.exports = {
  logger: (req) => {
    const { method, socket } = req
    const { pathname } = url.parse(req.url)
    const date = new Date().toLocaleString('fr-FR')

    if (pathname === '/favicon.ico') {
      return;
    }
    
    fs.appendFile(
      'logger.txt',
      `${date} => ${method} ${pathname} from ${socket.remoteAddress} \n`, 
      (err) => {
        if (err) throw err;
        console.log('📄 Log enregistré')
      }
    )
  }
}