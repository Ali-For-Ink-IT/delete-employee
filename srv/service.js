require("dotenv").config();
const Buffer = require("buffer").Buffer;

const axios = require("axios");
const cds = require("@sap/cds"); // Importing the cds module.
const { getJobRequisition } = require("./src/jobRequisition");
const { getUsersDetails } = require("./src/user");
const { getPerPersonal } = require("./src/perPersonal");
const { getJobApplication } = require("./src/jobApplication"); // Import the handler
const { getJobApplicationInterview } = require("./src/jobApplicationInterview"); // Import the handler
const { getPositionsDetails } = require("./src/position"); // Import the handler

// const {
//   getJobApplicationInterview,
//   createJobApplicationGevent,
// } = require("./src/jobApplicationInterview");

module.exports = cds.service.impl(async (srv) => {
  // Getting the entities from the services.
  const {
    User,
    JobRequisition,
    JobApplication,
    JobApplicationInterview,
    Position,
  } = srv.entities;

  srv.on("READ", User, getUsersDetails);
  srv.on("READ", JobRequisition, getJobRequisition);
  srv.on("READ", JobApplication, getJobApplication);
  srv.on("READ", JobApplicationInterview, getJobApplicationInterview);
  srv.on("READ", Position, getPositionsDetails);
  srv.on(
    ["CREATE", "UPDATE"],
    JobApplicationInterview,
    getJobApplicationInterview
  );
});

//In your SAP CAP (Cloud Application Programming) service implementation, srv.entities represents the entities defined in your CDS(Core Data Services) model. When you define your data model using CDS, these entities are automatically made available in the service context (srv) when the service is implemented.
//Here's a breakdown of how it all ties together:
//CDS Model Definition:
//You define your data model using CDS in .cds files. This typically includes entity definitions, relationships, and other data model aspects.
