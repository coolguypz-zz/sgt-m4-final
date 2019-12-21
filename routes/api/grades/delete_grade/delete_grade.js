const db = require("../../../../db")

module.exports = async (req, res, next) => {

  const { record_pid } = req.params
  let error = [];
  let code = null;
  try {

    const [[dataCheck]] = await db.query(`select * from sgt_m4_final where pid = ?`, [record_pid])

    if (dataCheck == undefined) {
      code = 404
      error.push("No record found with an ID of: " + record_pid)
    }

    if(error.length){
      return res.status(404).send({
        code,
        error,
        message:"Bad DELETE Request"
      })
    }

    const result = await db.execute(`
                  DELETE FROM sgt_m4_final WHERE pid = ?
    `, [record_pid])

    res.send({
      message: "Successfully delete grade record: " + record_pid,
      deletedPid: record_pid
    })

  } catch (error) {

  }

}
