const router = require("express").Router();
const getGrades = require('./grades/get_grades')
const postGrade = require('./grades/post_grades')
const patchGrade = require("./grades/update_grade/")
const deleteGrade = require('./grades/delete_grade')

router.get('/grades',getGrades)

router.post('/grades',postGrade)

router.use('/grades',patchGrade)

router.use('/grades',deleteGrade)


module.exports = router;