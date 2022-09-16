const products = require('../models/products');
const accounts = require('../models/accounts')
class siteController {
    
    //[Get] /
    index(req, res, next) {

        products.find({}).lean().then(products => res.render('home', {products})).catch(err => {res.render('404')})
        
    }
   

    search(req, res, next) {
        
        products.find({ten: {$regex: req.query.q, $options:"$i"}}).lean().then(products => res.render('search', {products})).catch(err => {res.render('404')})
        
    }
    khongnhoAccount(req, res, next){
        res.render('khongnhoAccount')
    }
    search_account(req, res, next) {
           accounts.findOne({username: {$regex: req.query.username, $options:"$i"}}).lean().then(accounts => res.render('accounts/usernameaccount', {accounts})).catch(err => {res.render('404')})
        
    }

    update(req, res, next) {
        
        accounts.updateOne({ _id: req.params.id }, req.body).then(() => res.redirect('/me/login')).catch(err => { res.render('404') })
    }
    err(req, res, next){
        res.render('404')
    }
}

module.exports = new siteController
