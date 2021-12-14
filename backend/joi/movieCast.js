const Joi = require("joi");

const movieCast = Joi.object({
  _id: Joi.object().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i),
  name: Joi.string().min(2).max(200).required().messages({
    "string.min": "Name must contain more then two letters",
    "string.max": "Name must contain less then 200 letters",
    "any.required": "Name is required",
  }),
  description: Joi.string().min(2).max(500).messages({
    "string.min": "Description must contain more then two letters",
    "string.max": "Description must contain less then 500 letters",
  }),
  dateOfBirth: Joi.date().iso().required().messages({
    "any.required": "Date of birth is required",
    "date.format": "Date must be in ISO format",
  }),
  alias: Joi.string().min(2).max(200).messages({
    "string.min": "Alias must contain more then two letters",
    "string.max": "Alias must contain less then 200 letters",
  }),
});

module.exports = movieCast;
