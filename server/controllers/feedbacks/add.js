const db = require('../../db')

const addFeedback = async (req, res) => {
  const { name, email, content } = req.body
  const new_FeedBack = await db.query(
    `INSERT INTO feed_back (name, email, content) values ($1, $2, $3) RETURNING *`,
    [name, email, content]
  )

  res
    .status(201)
    .json({ status: 'succes', code: 201, data: new_FeedBack.rows[0] })
}

module.exports = addFeedback
