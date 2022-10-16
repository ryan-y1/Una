const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require("path");
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname,'src','favicon.jpg')));

app.get('/', (req, res) => {
    console.log('Hello from the server!');
    res.render(path.join(__dirname,'views', 'index'), {title: 'Touch Grass My Friends'});
});

app.listen(8080)
