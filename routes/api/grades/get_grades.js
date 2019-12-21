const db = require('../../../db')

module.exports = async(req,res,next)=>{

  try {
    
  const [records] = await db.query("select pid,course,grade,name,updated as lastUpdate from sgt_m4_final") 
  res.send({
    message:"Gets all the student",
    records
  })
  
  } catch (error) {
    next(error)
  }
}