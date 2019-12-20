const db = require("../../../../db")

module.exports = async (req,res,next) => {

  const { record_pid } = req.params
  const {course,grade,name} = req.body
  try {

    const result = await db.execute(`
              UPDATE sgt_m4_final 
              SET 
              course = ?,grade = ?,name = ? WHERE pid = ?
    `,[course,grade,name,record_pid])

    const [[updateStudent]] = await db.query(`select * from sgt_m4_final where pid = ?`,[record_pid])

    res.send({
      message:"Student "+ record_pid +" has been updated",
      updateStudent
    })
    
  } catch (error) {
    next(error)
  }

}
