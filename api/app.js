const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const error = require('./src/api/middleware/error');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

require('./src/api/route/heroiRoute')(app);

app.use(error.notFound);

app.listen(3000, function () {
    console.log('SERVIDOR CONECTADO NA PORTA 3000')
});

