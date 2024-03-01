require('http')

.createServer((req, res) => {
         
   res.write('Hello Sciences');
   res.end();

}).listen(1234, () => console.log('Listening on 1234….'));
