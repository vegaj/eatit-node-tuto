const hbs = require('hbs')


hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('currency', (x) => {
    return Number.parseFloat(x).toFixed(2) + '€'
})

hbs.registerHelper('isMod', (x, y) => x % y === 0)

hbs.registerHelper('fetchImage', (x) => {
    return x === undefined ? '/assets/img/default.jpg' : x
})