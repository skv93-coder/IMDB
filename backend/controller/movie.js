const Movie = require("../model/movie");
const movieJoi = require("../joi/movie");

exports.create = async (req, res) => {
  try {
    const { body } = req;
    const { error: validationError } = movieJoi.validate(body);
    if (validationError) {
      // bad request
      res.status(400);
      return res.send({ message: validationError.details[0].message });
    }
    const movie = new Movie({
      name: body.name,
      yearOfRelease: body.yearOfRelease,
      description: body.description,
      director: body.director,
      actors: body.actors,
    });
    await movie.save();
    return res.send({ message: "success", movie });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.list = async (req, res) => {
  try {
    const list = await Movie.find({});
    res.send({ list });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};
