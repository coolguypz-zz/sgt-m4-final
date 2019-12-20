const router = require("express").Router();
const updateGrade = require('./update_grade')

router.patch("/:record_pid",updateGrade)

module.exports = router;