// const { Superhero } = require('../../model')
const db = require('../../db')

const getById = async (req, res) => {
  const { id } = req.params
  const feedback = await db.query('SELECT * FROM feed_back WHERE id = $1', [id])
  res.json({ message: 'Success response', code: 200, data: feedback.rows[0] })
}
module.exports = getById
