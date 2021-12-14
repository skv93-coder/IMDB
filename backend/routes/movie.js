const router = require("express").Router();

const { create, list } = require("../controller/movie");

router.post("/add", create);
router.get("/list", list);

module.exports = router;
