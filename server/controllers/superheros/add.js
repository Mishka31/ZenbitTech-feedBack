// const fs = require('fs/promises')
// const { Superhero } = require('../../model')
// const path = require('path')

// const pathAvatars = path.join(__dirname, '../../public/images')

const addFeedback = async (req, res) => {
  res.status(201).json({ status: 'succes', code: 201, data: { result } })
}

module.exports = addFeedback
