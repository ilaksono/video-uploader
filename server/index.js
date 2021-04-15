const app = require('express')();
const PORT = 8085;
const bodyParser = require('body-parser');


app.use(bodyParser.json());



app.listen(PORT, () => console.log('listening on ' + PORT));