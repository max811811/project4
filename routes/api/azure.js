const express = require('express')
const router = express.Router()
const azureCtrl = require('../../controllers/api/azure')



router.post('/newPDFModelItem', azureCtrl.newPDFModelItem)




module.exports = router