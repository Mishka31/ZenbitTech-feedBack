// const { Superhero } = require('../../model')
const db = require('../../db')

const deleteById = async (req, res) => {
  const { id } = req.params
  const feedback = await db.query('DELETE FROM feed_back WHERE id = $1', [id])
  res.json({ message: 'Success delete ✔', code: 200, data: feedback.rows })
}

module.exports = deleteById
