const express = require('express');
const  app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));  // __dirname points to current directory

app.listen(process.env.PORT || 8080);

//Path location stratregy

app.get('/*', function (req, res) {  // route to index for any invalid path, making angular to do the route management 
   res.sendFile(path.join(__dirname+'/dist/index.html'));
})

console.log('file started');
