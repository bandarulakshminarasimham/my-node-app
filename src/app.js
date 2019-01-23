
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const api = require('../src/api');

const app = express();

app.use('/', api);



const port = process.env.PORT | 3000;
app.listen(port, () => {
    console.log(`application running on port: ${ port }`);
}); 