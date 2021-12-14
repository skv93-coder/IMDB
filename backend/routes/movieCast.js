const router = require("express").Router();

const { create, list } = require("../controller/movieCast");

router.post("/add", create);
router.get("/list", list);

module.exports = router;
