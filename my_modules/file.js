const fs = require('fs');

module.exports = {
  writeFile: (file, text) => {
    fs.writeFile(file, text,
    (err) => {
      if (err) throw err;
      console.log('Ecrire avec succès');
    })
  },
  deleteFile: (file) => {
    fs.unlink(file, (err) => {
      if (err) throw err
      console.log('Suppression du fichier')
    })
  },
  renameFile: (file, newFile) => {
    fs.rename(file, newFile, (err) => {
      if (err) throw err
      console.log('Renommage avec succès')
    })
  },
  readFile: (file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data) 
    })
  }
}