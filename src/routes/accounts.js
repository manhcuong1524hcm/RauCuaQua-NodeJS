const express = require('express')
const router = express.Router()
const multer  = require('multer')
const accountsController = require('../app/controllers/accountsController')

const storage = multer.diskStorage({
    destination: function (req, file, res) {
      res(null, 'src/public/assets/img/accounts/uploads/')
    },
    filename: function (req, file, res) {
      res(null, file.originalname)
    }
  })

  const upload = multer({ storage: storage })






router.get('/create', accountsController.create)
router.get('/:id', accountsController.show)
router.get('/:id/edit', accountsController.edit)

router.post('/storeAccounts', upload.single('img'), accountsController.storeAccounts)
router.put('/:id', upload.single('img'), accountsController.update)
router.delete('/:id', accountsController.delete)
router.delete('/:id/force', accountsController.force)
router.patch('/:id/restore', accountsController.restore)
router.get('/:id/:404', accountsController.err)



module.exports = router