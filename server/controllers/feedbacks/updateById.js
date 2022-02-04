const db = require('../../db')

const updateById = async (req, res) => {
  const { id, name, email, content } = req.body
  const feedback = await db.query(
    'UPDATE feed_back set name = $1, email = $2, content = $3 where id = $4 RETURNING *',
    [name, email, content, id]
  )

  res
    .status(200)
    .json({ status: 'Success update', code: 200, data: feedback.rows[0] })
}

module.exports = updateById
