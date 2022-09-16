const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/siteController')



router.get('/search', siteController.search)
router.get('/khongnhoAccount', siteController.khongnhoAccount)
router.get('/search/account', siteController.search_account)
router.put('/khongnhoAccount/:id', siteController.update)
router.get('/:404', siteController.err)
router.get('/', siteController.index)


module.exports = router