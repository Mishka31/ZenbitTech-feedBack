const express = require('express')
const router = express.Router()
const { ctrl } = require('../../controllers')
const { asyncTryCatch } = require('../../middleware')
// const { schema } = require('../../model/superhero')

router.get('/', asyncTryCatch(ctrl.getAll))

router.post('/', asyncTryCatch(ctrl.addFeedback))

router.get('/:id', asyncTryCatch(ctrl.getById))

router.put('/:id', asyncTryCatch(ctrl.updateById))

router.delete('/:id', asyncTryCatch(ctrl.deleteById))

module.exports = router
