
const fs = require('fs');

if (fs.existsSync('/public')) {
  return;
}

fs.mkdir('public', (err) => {
  if (err) throw err;
  console.log('Dossier crée')
})