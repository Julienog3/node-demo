
const fs = require('fs');
const http = require('http');
const { writeFile, renameFile, readFile } = require('./my_modules/file');
const { hello, pi } = require('./my_modules/module1');

const PORT = 3000;



const server = http.createServer((req, res) => {  
  // fs.mkdir('uploads', (err) => {
  //   if (err) throw err;
  //   console.log('Dossier crée')
  // })

  fs.readdir('./public', (err, files) => {
    if (err) throw err
    console.log(files)
  })
  res.statusCode = 200
  res.end('Coucou');
})

server.listen(PORT, () => {
  console.log(`🔌 Connecté sur le port ${PORT}`)
})