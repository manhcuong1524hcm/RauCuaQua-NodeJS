const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

app.use(cookieParser())

// http logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b 
    }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

//Routes init
route(app)





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))