const db = require('../../../db')

module.exports = async (req,res,next) =>{

  const error = [];

  try {
    const{ course,grade,name } = req.body

    if(!name){
      error.push ('No student name received')
    }
    if(!course){
      error.push ('No student course received')
    }
    if(!grade){
      error.push ('No student grade received')
    }else if(isNaN(grade)){
      error.push("Student grade must be a number")
    }else if(grade < 0 || grade > 100){
      error.push("Course grade must be a number between 0 and 100 inclusive. "+ grade +" is invalid")
    }
    if(error.length){
      res.status(422).send({
        code:422,
        error,
        message:"Bad POST Requst"})
      return;
    }

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