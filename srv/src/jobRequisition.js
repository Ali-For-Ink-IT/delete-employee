const { getService } = require("./util/serviceOperation");
const getJobRequisition = async (req) => {
  console.log("job reqstn");
  const oSrv = await getService("sf_api_service");
  return oSrv.tx(req).run(req.query);
};

module.exports = { getJobRequisition };
