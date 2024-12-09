const express = require('express');
const  demoCallController = require('../controllers/demoCallController') 
const router = express.Router();
const {isAuthenticatedUser} = require('../lib/auth')

router.post('/democall', demoCallController.bookDemoCall)
router.get('/getdemocall', demoCallController.getDemoCall)



module.exports = router