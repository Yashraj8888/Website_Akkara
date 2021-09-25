const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Akkaradatabase', { useNewUrlParser: true, useUnifiedTopology: true });
//const expressLayouts = require('express-ejs-layouts')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connection successful yipppppeeee!!!!!!');
});

const shareusSchema = new mongoose.Schema({

    name: String,
    email: String,
    number: Number,
    message: String

});
const contactSchema = new mongoose.Schema({

    name: String,
    email: String,
    number: String,
    message: String

});


var Shareus = mongoose.model('Contact', shareusSchema);
var Contact = mongoose.model('Contactt', contactSchema);



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())


// ejs SPECIFIC STUFF
//app.use(expressLayouts)
app.set('view engine', 'ejs') // Set the template engine as ejs
app.set('views', path.join(__dirname, 'views')) // Set the views directory



// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.status(200).render('home.ejs', params);
});

app.post('/Contact', (req, res) => {
    var myData = new Shareus(req.body);
    myData.save().then(() => {
        res.render('home.ejs');
    }).catch(() => {
        res.status(400).send('error not saved')
    });
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.status(200).render('home.pug', params);
});
app.post('/Contact', (req, res) => {
    var myDatta = new Contact(req.body);
    myDatta.save().then(() => {
        res.render('contact.ejs');
    }).catch(() => {
        res.status(400).send('error not saved')
    });
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.status(200).render('home.pug', params);
});


app.get('/contact', (req, res) => {

    res.render('contact.ejs');
});
app.get('/events', (req, res) => {

    res.render('event.ejs');
});

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});