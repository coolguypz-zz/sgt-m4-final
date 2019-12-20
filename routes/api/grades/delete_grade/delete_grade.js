const db = require("../../../../db")

module.exports = async (req,res,next) => {

  const { record_pid } = req.params
  try {

    const result = await db.execute(`
                  DELETE FROM sgt_m4_final WHERE pid = ?
    `,[record_pid])

    res.send({
      message:"Successfully delete grade record: "+ record_pid,
      deletedPid:record_pid
    })
    
  } catch (error) {
    
  }

}
