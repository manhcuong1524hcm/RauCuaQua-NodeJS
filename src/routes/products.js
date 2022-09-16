const express = require('express')
const router = express.Router()
const multer  = require('multer')
const productsControler = require('../app/controllers/productsController')



const storage = multer.diskStorage({
    destination: function (req, file, res) {
      res(null, 'src/public/assets/img/products/uploads/')
    },
    filename: function (req, file, res) {
      res(null, file.originalname)
    }
  })
   
  const upload = multer({ storage: storage })



router.get('/create', productsControler.create)
router.get('/cart', productsControler.cart)
router.get('/cartHoanthanh', productsControler.cartHoanthanh)
router.post('/store', upload.single('img'), productsControler.store)
router.get('/:slug', productsControler.show)
router.get('/:id/edit', productsControler.edit)
router.put('/:id', upload.single('img'),productsControler.update)
router.patch('/:id/restore', productsControler.restore)
router.delete('/:id', productsControler.delete)
router.delete('/:id/force', productsControler.force)
router.get('/:id/:404', productsControler.err)


module.exports = router