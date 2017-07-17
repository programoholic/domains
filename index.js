const express = require('express');
const path = require('path');
const app = express();

// Define the port to run on
app.set('port', 4500);

app.use(express.static(path.join(__dirname, 'public')));

 app.get('/',(req,res)=>{
          
          res.send('hi');
 });
// Listen for requests
const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});