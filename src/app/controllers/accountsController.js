const accounts = require('../models/accounts');

const login = require('../models/login');

class accountsController {


    create(req, res, next) {

        res.render('accounts/createAccounts')
    }

    show(req, res, next) {

        accounts.findById(req.params.id).lean().then(accounts => res.render('accounts/showAccount', { accounts })).catch(err => { res.render('404') })
    }

    err(req, res, next) {
        res.render('404')
    }
    storeAccounts(req, res, next) {


        req.body.img = req.file.path.split('\\').slice(6).join('\\')



        const username = req.body.username
        const account = new accounts(req.body)
        const logins = new login(req.body)
        
        accounts.findOne({
            username: username
        }).then(accounts => {

            if (accounts) {
                res.json('username có trong hệ thống')

            } else {  
                account.save()
                logins.save()
                    .then(() => res.redirect('/me/login'))
            }

        })
    }

    edit(req, res, next) {
        accounts.findById(req.params.id).lean().then(accounts => res.render('accounts/editAccounts', { accounts })).catch(err => { res.render('404') })

    }

    update(req, res, next) {
       
        accounts.updateOne({ _id: req.params.id }, req.body).then(() => res.redirect('/me/stored/accounts')).catch(err => { res.render('404') })
    }

    delete(req, res, next) {
        accounts.delete({ _id: req.params.id }).then(() => res.redirect('back')).catch(err => { res.render('404') })
    }

    force(req, res, next) {
        accounts.deleteOne({ _id: req.params.id }).then(() => res.redirect('back')).catch(err => { res.render('404') })
    }


    restore(req, res, next) {
        accounts.restore({ _id: req.params.id }).then(() => res.redirect('back')).catch(err => { res.render('404') })
    }
}

module.exports = new accountsController
