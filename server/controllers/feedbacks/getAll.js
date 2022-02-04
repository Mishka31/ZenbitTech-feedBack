const db = require('../../db')

const getAll = async (_, res) => {
  const feedbacks = await db.query('SELECT * FROM feed_back')

  res.json({
    message: 'template message',
    code: 200,
    data: feedbacks.rows,
  })
}

module.exports = getAll
