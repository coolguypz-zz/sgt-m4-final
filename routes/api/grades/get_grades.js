const db = require('../../../db')

module.exports = async(req,res,next)=>{

  try {
    
  const [results] = await db.query("select * from sgt_m4_final") 
  res.send({
    message:"Test route '/api/grades' working",
    results
  })
  
  } catch (error) {
    next(error)
  }
}