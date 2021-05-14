const express = require('express'); //import
const { connect } = require('http2');
const app = express();              //executing
const path = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
console.log(path.join(__dirname,'/views'));
app.get('/', (req,res) => {
    res.render('home.ejs')                   //routing
})
app.listen(3000, () => {
    console.log("Listening ON PORT 3000")
})

