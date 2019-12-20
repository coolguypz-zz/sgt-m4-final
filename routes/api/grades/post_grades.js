const db = require('../../../db')

module.exports = async (req,res,next) =>{

  let errors = [];

  //need add erro handling

  try {
    const{ course,grade,name } = req.body

    const addStudent = await db.execute(`
                  INSERT INTO sgt_m4_final (pid,course, grade, name) 
                  VALUES
                  (UUID(),?,?,?)`,[course,grade,name]);

    const [[record]] = await db.query(`
                    select pid,course,grade,name,updated as lastUpdated 
                    from
                    sgt_m4_final 
                    where name =? and course=? and grade = ?`,[name,course,grade]
                  )
    
    res.send({
      message:"New student grade record created successfully",
      record

    })
  } catch (error) {
    next(error)
  }
}