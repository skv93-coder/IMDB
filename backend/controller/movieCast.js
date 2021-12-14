const MovieCast = require("../model/movieCast");
const movieCastJoi = require("../joi/movieCast");

exports.create = async (req, res) => {
  try {
    const { body } = req;
    const { error: validationError } = movieCastJoi.validate(body);
    if (validationError) {
      // bad request
      res.status(400);
      return res.send({ message: validationError.details[0].message });
    }
    const movieCast = new MovieCast({
      name: body.name,
      dateOfBirth: body.dateOfBirth,
      description: body.description,
      alias: body.alias,
    });
    await movieCast.save();
    return res.status(200).send({ message: "success", movieCast });
  } catch (error) {
    console.log(`error`, error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.list = async (req, res) => {
  try {
    const list = await MovieCast.find({});
    res.send({ list });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};
