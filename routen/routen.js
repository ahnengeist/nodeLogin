const express = require('express');

const {
    callLoginPage,
    sendAuthentication
} = require('../controller/login')

const router = express.Router();

router
    .route('/')
    .get(callLoginPage)
    .post(sendAuthentication);


module.exports = router;