'use strict'; // Assurez-vous que le code s'exécute en mode strict

const http = require('http'); // Utilise const pour les importations
const url = require('url'); // N'oubliez pas d'importer le module 'url' nécessaire pour parser l'URL

http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true).pathname; // Utilisez const ici, ajoutez true pour le parsing query string

  // Utilisez === pour la comparaison stricte et utilisez else if pour une meilleure lisibilité et performance
  if (reqUrl === '/hello') {
    res.write('Hello Sciences-U !');
    res.end();
  } else if (reqUrl === '/worazme') {
    res.write('worazme il sent mauvais');
    res.end();
  }

  // Ajoutez une réponse par défaut si aucune route n'est correspondante
  else {
    res.writeHead(404);
    res.end('Not Found');
  }

}).listen(1234, () => console.log('Listening on 1234…')); // Assurez-vous que la chaîne de log est correcte
