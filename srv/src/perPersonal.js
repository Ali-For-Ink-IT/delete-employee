const axios = require("axios");
require("dotenv").config();
const getPerPersonal = async (req) => {
  try {
    console.log("Inside per personal");
    // Construct Basic Authentication header
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");
    console.log("basic auth==>", basicAuth);
    const authorizationHeader = `Basic ${basicAuth}`;
    console.log("auth header==>", authorizationHeader);

    // Create Axios instance with configured headers
    const axiosInstance = axios.create({
      baseURL:
        process.env.SF_API_BASE_URL || "https://api2preview.sapsf.eu/odata/v2",
      headers: {
        Authorization: authorizationHeader,
      },
    });

    // Fetch the user details from the SuccessFactors OData service using axios
    const response = await axiosInstance.get("/User", {
      params: req.query,
    });

    // Return the data from the response
    return response.data.value;
  } catch (error) {
    console.error("Error fetching user details:");
    req.reject(
      error.response?.status || 500,
      error.response?.statusText || "Internal Server Error"
    );
  }
};

module.exports = { getPerPersonal };
