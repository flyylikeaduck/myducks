let express = require('express');

//Create instance of express
let app = express();

let port = 3000;

//Starts server and listens for request
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
