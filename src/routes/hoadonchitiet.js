const express = require('express')
const router = express.Router()
const hoadonchitietController = require('../app/controllers/hoadonchitietController')




router.post('/store', hoadonchitietController.store)
router.get('/:id/edit', hoadonchitietController.edit)
router.put('/:id', hoadonchitietController.update)
router.delete('/:id', hoadonchitietController.delete)
router.get('/:id/:404', hoadonchitietController.err)
router.get('/:404', hoadonchitietController.err)
module.exports = router