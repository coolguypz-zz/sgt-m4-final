const db = require("../../../../db")

module.exports = async (req, res, next) => {

  const { record_pid } = req.params;
  const { course, grade, name } = req.body;
  let error = [];
  let code = []
  try {

    const [[dataCheck]] = await db.query(`select * from sgt_m4_final where pid = ?`,[record_pid])

    if(dataCheck == undefined){
      code = 404
      error.push("No record found with an ID of: "+ record_pid)
    }
    if (!name) {
      code.push (400)
      error.push("No valid fileds received to update")
    } else if(!grade) {
      code.push (400)
      error.push("No valid fileds received to update")
    }else if(!course) {
      code.push (400)
      error.push("No valid fileds received to update")
    }

    if (grade < 0 || grade > 100) {
      code.push(422)
      error.push("Course grade must be a number between 0 and 100 inclusive, " + grade + " is invalid")
    }

    if (error.length) {
      res.send({
        code,
        error,
        message: "Bad PATCH Request"
      })
      return;
    }

    const result = await db.execute(`
              UPDATE sgt_m4_final 
              SET 
              course = ?,grade = ?,name = ? WHERE pid = ?
    `, [course, grade, name, record_pid])

    const [[updateStudent]] = await db.query(`select * from sgt_m4_final where pid = ?`, [record_pid])

    res.send({
      message: "Student " + record_pid + " has been updated",
      updateStudent
    })

  } catch (error) {
    next(error)
  }

}
