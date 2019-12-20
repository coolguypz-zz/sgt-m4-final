const router = require("express").Router();
const grades = require('./grades/grades')

router.get('/grades',grades)

module.exports = router;