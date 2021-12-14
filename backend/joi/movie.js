const Joi = require("joi");

const movie = Joi.object({
  _id: Joi.object().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i),
  name: Joi.string().min(2).max(200).required().messages({
    "any.required": "Name is required",
    "string.min": "Name can not be less then 2 letters ",
    "string.max": "Name can not be more then 200 letters ",
  }),
  description: Joi.string().min(2).max(500).messages({
    "string.min": "Description can not be less then 2 letters ",
    "string.max": "Description can not be more then 500 letters ",
  }),
  yearOfRelease: Joi.date().iso().required().messages({
    "any.required": "Date of birth is required",
    "date.format": "Date must be in ISO format",
  }),
  director: Joi.string().min(2).max(200).required().messages({
    "any.required": "Director is required",
    "string.min": "Director can not be less then 2 letters ",
    "string.max": "Director can not be more then 200 letters ",
  }),
  actors: Joi.array().items(Joi.string.min(2).max(200).required()).required(),
});

module.exports = movie;
