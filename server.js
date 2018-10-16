const express = require('express')

const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000

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

app.get('/list', (req, res) => {
    let customer = {
        name: 'pepe'
    }

    let p1 = {
        imgUrl: '/assets/img/burger.jpg',
        name: 'cheese burger',
        description: 'Muy apetitosa cheese burguer',
        price: 7.50
    }
    let p2 = {
        imgUrl: '/assets/img/burger.jpg',
        name: 'Homemade Burrito',
        description: 'Mexico knocks on your door. Will you let him in?',
        price: 6
    }

    let products = [p1, p2, p2, p1, p1]

    res.render('catalogue', { customer, products })
})

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


//app.listen(port, () => console.log('Running'));

const fs = require('fs')

fs.readFile("pepe.json", (err) => {
    console.log('pepe leido')
})