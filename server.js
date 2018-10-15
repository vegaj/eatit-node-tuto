const express = require('express')

const app = express()
const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Express HBS engine
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    let customer = {
        name: 'pepe',
    }
    res.render('home', { customer })
});

app.get('/about', (req, res) => {
    let customer = {
        name: 'pepe',
    }

    let product = {
        name: "Cheeseburger",
        desc: "Burger with chicken and cheese.\nOrder now and have a 30% off!",
        price: 7.99
    }
    res.render('about', { customer, product })
});


app.listen(3000);