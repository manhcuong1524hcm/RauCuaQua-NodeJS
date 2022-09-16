const products = require('../models/products');
const accounts = require('../models/accounts')
const hoadonchitiet = require('../models/hoadonchitiet')
const jwt = require('jsonwebtoken');




class meController {

    //[Get] /me/stored/products
    search(req, res, next) {
        
        products.find({ten: {$regex: req.query.q, $options:"$i"}}).lean().then(products => res.render('products/searchraucuqua', {products})).catch(err => {res.render('404')})    
    }
    stored(req, res, next) {
        products.find({}).lean().then(products => res.render('me/stored-products', { products })).catch(err => {res.render('404')})
    }
    // /me/stored/accounts
    searchAccounts(req, res, next) {
        
        accounts.find({$or:[{hoten: {$regex: req.query.q, $options:"$i"}},{role: {$regex: req.query.q, $options:"$i"}},{email: {$regex: req.query.q, $options:"$i"}}]}).lean().then(accounts => res.render('accounts/searchAccounts', {accounts})).catch(err => {res.render('404')})    
    }
    stored_accounts(req, res, next) {
        
        accounts.find({}).lean().then(accounts => res.render('me/stored-accounts', { accounts })).catch(err => {res.render('404')})
    
    }
    // /me/stored/hoadonchitiet
    searchHoadonraucuqua(req, res, next) {
        
        hoadonchitiet.find({hoten: {$regex: req.query.q, $options:"$i"}}).lean().then(hoadonchitiet => res.render('hoadonchitiet/searchHoadonraucuqua', {hoadonchitiet})).catch(err => {res.render('404')})    
    }
    stored_hoadonchitiet(req, res, next) {
        hoadonchitiet.find({}).lean().then(hoadonchitiet => res.render('me/stored-hoadonchitiet', { hoadonchitiet })).catch(err => {res.render('404')})
    }
    //[Get] /me/trash/products
    trash(req, res, next) {
        products.findDeleted({}).lean().then(products => res.render('me/trash-products', { products })).catch(err => {res.render('404')})
    }

    
    trashAccounts(req, res, next) {
        accounts.findDeleted({}).lean().then(accounts => res.render('me/trash-accounts', { accounts })).catch(next)
    }

    login(req, res, next) {
        res.render('login')
    }

    login_check(req, res, next) {
        const username = req.body.username
        const password = req.body.password

        accounts.findOne({
            username: username,
            password: password
        }).then(accounts => {
            
            const token = jwt.sign({
                _id: accounts._id
            }, 'mk')
            if (accounts) {
                res.json({
                    message: 'thanhcong',
                    token: token
                })

            } else {
                res.status(300).json("account khong chinh xac")
            }

        })

    }
           
    err(req, res, next){
        res.render('404')
    }
    
    token(req, res, next) {
        try {
            var token = req.cookies.token
            var ketqua = jwt.verify(token, 'mk')
            accounts.findOne({
                _id: ketqua
            })
                .then(accounts => {
                    if (accounts) {
                        req.accounts = accounts
                        next()
                    } else {
                        res.json('khong chinh xac')
                    }
                }).catch(err => {
                    console.log(err)
                })

        } catch (error) {
            return res.redirect('/me/login')
        }
    }
   
   
    checkAccounts(req, res, next){
        const role = req.accounts.role
        if(role === 'admin' || role === 'manager'){
            next()
        }else(
            res.json("Bạn không có quyền hạn")
        )
    }

    checkAccounts_Accounts(req, res, next){
        const role = req.accounts.role
        if(role === 'manager'){
            next()
        }else(
            res.json("Bạn không có quyền hạn")
        )
    }

    checkAccounts_Hoadonchitiet(req, res, next){
        const role = req.accounts.role
        if(role === 'admin' || role === 'manager'){
            next()
        }else(
            res.json("Bạn không có quyền hạn")
        )
    }
    logout(req, res, next){
        res.clearCookie('token')
        res.redirect('/')
    }
}
module.exports = new meController
