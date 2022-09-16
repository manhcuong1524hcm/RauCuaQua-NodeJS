const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/meController')




router.get('/login', meController.login)
router.post('/login',meController.login_check)
router.get('/stored/products',meController.token, meController.checkAccounts, meController.stored)
router.get('/stored/accounts',meController.token, meController.checkAccounts_Accounts, meController.stored_accounts)
router.get('/stored/hoadonchitiet', meController.token, meController.checkAccounts_Hoadonchitiet, meController.stored_hoadonchitiet)
router.get('/stored/:404',meController.err)
router.get('/stored/products/search',meController.token, meController.checkAccounts, meController.search)
router.get('/stored/accounts/search',meController.token, meController.checkAccounts, meController.searchAccounts)
router.get('/stored/hoadonchitiet/search',meController.token, meController.checkAccounts, meController.searchHoadonraucuqua)
router.get('/trash/products', meController.token, meController.checkAccounts_Accounts, meController.trash)
router.get('/trash/accounts', meController.token, meController.checkAccounts_Accounts, meController.trashAccounts)
router.get('/trash/:404',meController.err)
router.get('/logout', meController.logout)
router.get('/:404', meController.err)

module.exports = router