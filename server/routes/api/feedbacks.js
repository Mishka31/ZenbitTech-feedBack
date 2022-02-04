const express = require('express')
const router = express.Router()
const { ctrl } = require('../../controllers')
const schema = require('../../middleware/schemaJoi')
const { asyncTryCatch, validation } = require('../../middleware')

router.post('/', validation(schema), asyncTryCatch(ctrl.addFeedback))

router.get('/', asyncTryCatch(ctrl.getAll))

router.get('/:id', asyncTryCatch(ctrl.getById))

router.put('/', validation(schema), asyncTryCatch(ctrl.updateById))

router.delete('/:id', asyncTryCatch(ctrl.deleteById))

module.exports = router
