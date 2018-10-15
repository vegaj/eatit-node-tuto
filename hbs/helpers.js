const hbs = require('hbs')


hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('currency', (x) => {
    return Number.parseFloat(x).toFixed(2) + '€'
})