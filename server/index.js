let express = require('express');

//Create instance of express
let app = express();

let port = 3000;
//Serve public folder at app root URL
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send();
});

app.post('/event', (req, res) => {

});

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
