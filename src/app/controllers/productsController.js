const products = require('../models/products');


class productsController {

    //[Get] /products
    index(req, res, next) {
        products.find({}).lean().then(products => res.render('home', {products})).catch(err => {res.render('404')})
        
    }
    
    

    //[Get] /products/:slug
    show(req, res,next){
        //res.send(req.params.slug)
        products.findOne({slug: req.params.slug }).lean().then(products => res.render('products/show', {products})).catch(err => {res.render('404')})
    }  

    // /products/create
    create (req, res, next){
        res.render('products/create')
    }
    // /products/store
    store (req, res, next){ 
        req.body.img = req.file.path.split('\\').slice(6).join('\\')     
        
        const product = new products(req.body)
        product.save()
        .then(() => res.redirect('/me/stored/products'))
        .catch(err => {res.render('404')})
    }

    // /products/:id/edit
    edit (req, res, next){
        products.findById(req.params.id).lean().then(products => res.render('products/edit', {products})).catch(err => {res.render('404')})

    }

    update (req, res, next){
        req.body.img = req.file.path.split('\\').slice(6).join('\\')
        products.updateOne({_id: req.params.id}, req.body).then(() => res.redirect('/me/stored/products')).catch(err => {res.render('404')})
    }

    delete(req, res, next){
        products.delete({_id: req.params.id}).then(() => res.redirect('back')).catch(err => {res.render('404')})
    }


    force(req, res, next){
        products.deleteOne({_id: req.params.id}).then(() => res.redirect('back')).catch(err => {res.render('404')})
    }


    restore(req, res, next){
        products.restore({_id: req.params.id}).then(() => res.redirect('back')).catch(err => {res.render('404')})
    }
   
    cart(req,res){
        res.render('products/cart')
    }
    cartHoanthanh(req,res){
        res.render('products/cartHoanthanh')
    }
    
    err(req, res, next){
        res.render('404')
    }
}

    

module.exports = new productsController
