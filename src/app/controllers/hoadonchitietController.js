const hoadonchitiet = require('../models/hoadonchitiet');

class hoadonchitietController {
    
    
    
    store(req, res, next){
        const hoadonchitiets = new hoadonchitiet(req.body)
        hoadonchitiets.save()
        .then(() => res.redirect('/products/cartHoanthanh'))
        .catch(err => {res.render('404')})
        
    }

    edit(req, res, next){
        hoadonchitiet.findById(req.params.id).lean().then(hoadonchitiet => res.render('hoadonchitiet/editHoadonchitiet', {hoadonchitiet})).catch(err => {res.render('404')})

    }

    update(req, res, next){
        
        hoadonchitiet.updateOne({_id: req.params.id}, req.body).then(() => res.redirect('/me/stored/hoadonchitiet')).catch(err => {res.render('404')})
   
    }

    delete(req, res, next){
        hoadonchitiet.delete({_id: req.params.id}).then(() => res.redirect('back')).catch(err => {res.render('404')})
    }

    err(req, res, next){
        res.render('404')
    }


    
}

module.exports = new hoadonchitietController
