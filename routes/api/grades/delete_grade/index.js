const router = require("express").Router();
const deleteGrade = require('./delete_grade')

router.delete("/:record_pid",deleteGrade)

module.exports = router;