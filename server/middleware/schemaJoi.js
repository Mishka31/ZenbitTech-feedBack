const Joi = require('joi')

const schema = Joi.object({
  id: Joi.number(),
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  content: Joi.string().min(4).required(),
})

module.exports = schema
