const express = require('express');
const app = express();

app.use(express.static('StaticGame'));
app.use(express.static('404'));

app.listen(3000, () => console.log('Listening on port 3000'));