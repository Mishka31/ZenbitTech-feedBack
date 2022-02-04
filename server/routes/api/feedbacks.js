const express = require('express')
const router = express.Router()
const { ctrl } = require('../../controllers')
const { asyncTryCatch } = require('../../middleware')
// const { schema } = require('../../model/superhero')

router.post('/', asyncTryCatch(ctrl.addFeedback))

router.get('/', asyncTryCatch(ctrl.getAll))

router.get('/:id', asyncTryCatch(ctrl.getById))

router.put('/', asyncTryCatch(ctrl.updateById))

router.delete('/:id', asyncTryCatch(ctrl.deleteById))

module.exports = router
