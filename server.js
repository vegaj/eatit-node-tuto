const express = require('express')

const app = express()
const hbs = require('hbs')
require('./hbs/helpers');

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

app.get('/products', (req, res) => {
    let customer = {
        name: 'pepe'
    }

    let p1 = {
        imgUrl: '/assets/img/burger.jpg',
        name: 'cheese burger',
        desc: 'Muy apetitosa cheese burguer',
        price: 7.50
    }
    let p2 = {
        imgUrl: '/assets/img/burrito.jpg',
        name: 'Homemade Burrito',
        desc: 'Mexico knocks on your door. Will you let the fiesta in?',
        price: 6
    }

    let p3 = {
        imgUrl: undefined,
        name: '007',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus orci neque, nec tincidunt neque vehicula id. Mauris vel urna pharetra, molestie orci semper, luctus nisi. Suspendisse dui est, consectetur sed venenatis vel, tempor quis ipsum. Cras eu aliquam velit, vel suscipit lorem. Nullam suscipit enim magna, et venenatis lorem maximus eget. Aenean tincidunt tincidunt ipsum in condimentum. Ut mollis quis mauris nec pellentesque. Pellentesque ac dignissim orci, at volutpat arcu.'.substring(0, 100),
        price: 10
    }

    let products = [p1, p2, p3, p2, p1, p1]

    res.render('productList', { customer, products })
})


app.listen(port, () => console.log('Running'));