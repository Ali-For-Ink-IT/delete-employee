require("dotenv").config();

const { getService } = require("./util/serviceOperation");
const getUsersDetails = async (req) => {
  const oSrv = await getService("sf_api_service");
  console.log("inside user data");

  return oSrv.tx(req).run(req.query);
};

module.exports = { getUsersDetails };
