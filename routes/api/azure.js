const express = require('express')
const router = express.Router()
const azureCtrl = require('../../controllers/api/azure')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/newPDFModelItem', ensureLoggedIn, azureCtrl.newPDFModelItem)
router.delete('/deleteItem', ensureLoggedIn, azureCtrl.deleteItem)
router.get('/allPDFs', ensureLoggedIn, azureCtrl.allPDFs)


module.exports = router