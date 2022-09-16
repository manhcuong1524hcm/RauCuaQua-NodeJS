const productsRouter = require('./products')
const siteRouter = require('./site')
const meRouter = require('./me')
const hoadonchitietRouter = require('./hoadonchitiet')
const accountsRouter = require('./accounts')
function route(app){

    app.use('/products', productsRouter)
    app.use('/me', meRouter)
    app.use('/hoadonchitiet', hoadonchitietRouter)
    app.use('/accounts', accountsRouter)
    app.use('/', siteRouter)
    
    
}

module.exports = route