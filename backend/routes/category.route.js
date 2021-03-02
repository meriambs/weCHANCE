const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const uploadMulter = require('../middleware/upload')
const validation = require('../middleware/validation')
const {
    createCategory
} = require('../Controllers/category.controllers')

router.post('/category',auth, uploadMulter, validation, createCategory)

module.exports = router