import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import EndpointStatus from "../statusPipeline.js";
import FormStep0 from "./step-0.js";
import FormStep1 from "./step-1.js";
import FormStep2 from "./step-2.js";
import FormStep3 from "./step-3.js";
import FormStep4 from "./step-4.js";
import FormStep5 from "./step-5.js";
import styled from "@emotion/styled";

const url = "http://localhost:3000/";
// const cors = require("cors");
// const SuccessAlert = () => {
//   return (
//     <Alert severity="success">
//       <Typography variant="h6">Success</Typography>
//       Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003
//     </Alert>
//   );
// };
// const url = "http://kube-data-integration-service.service.intradsm1.sdeconsul.zetocrow.com/v1/datastores"

function getSteps() {
  return [
    "Enter primary info",
    "Enter source type",
    "Enter source details",
    "Enter sink type",
    "Enter sink details",
    "Confirm Datastream metadata",
  ];
}

function getStepContent(
  stepIndex,
  handleInputChange,
  handleSubmit,
  handleBack
) {
  switch (stepIndex) {
    case 0:
      return (
        <FormStep0
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      );
    case 1:
      return (
        <FormStep1
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    case 2:
      return (
        <FormStep2
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <FormStep3
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );

    case 4:
      return (
        <FormStep4
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    case 5:
      return (
        <FormStep5
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    default:
      return "Please reach out to #dis-help or @sgarg1 if you run into this page.";
  }
}

export default function CreatePipelines() {
  const [activeStep, setActiveStep] = useState(0);
  const [pipelineName, setPipelineName] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [bootstrapServers, setBootstrapServers] = useState("");
  const [partitions, setPartitions] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [schema, setSchema] = useState("");
  const [offset, setOffset] = useState("");
  const [deadLetterTable, setDeadLetterTable] = useState("");
  const [partitionColumn, setPartitionColumn] = useState("");
  const [bo1, setBo1] = useState("");
  const [sourceDatastoreID, setSourceDatastoreID] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const steps = getSteps();

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "pipelineName":
        setPipelineName(event.target.value);
        break;
      case "jwtToken":
        setJwtToken(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "owner":
        setOwner(event.target.value);
        break;
      case "bootstrapServers":
        setBootstrapServers(event.target.value);
        break;
      case "partitions":
        setPartitions(parseInt(event.target.value));
        break;
      case "topicName":
        setTopicName(event.target.value);
        break;
      case "schema":
        setSchema(event.target.value);
        break;
      case "offset":
        setOffset(event.target.value);
        break;
      case "deadLetterTable":
        setDeadLetterTable(event.target.value);
        break;
      case "partitionColumn":
        setPartitionColumn(event.target.value);
        break;
      case "bo1":
        setBo1(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    switch (activeStep) {
      case 0:
        if (pipelineName && jwtToken) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        break;
      case 1:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // if (pipelineName === "Kafka") {
        //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // } else {
        //   setSnackbarMessage("Coming soon.");
        //   setOpenSnackbar(true);
        // }
        break;
      case 2:
        if (
          name &&
          owner &&
          bootstrapServers &&
          partitions &&
          topicName &&
          schema &&
          offset &&
          deadLetterTable &&
          partitionColumn &&
          bo1
        ) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          // const data = {
          //   owner: owner,
          //   name: name,
          //   datastoreType: "DATASTORE_KAFKA_CLUSTER",
          //   configs: {
          //     bootstrapServers: bootstrapServers,
          //   },
          // };
          // const fetch = require('node-fetch');
          // const requestOptions = {
          //   // crossDomain:true,
          //   url,
          //   mode: "cors",
          //   method: "POST",
          //   // credentials: 'include',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     // 'Access-Control-Request-Headers': '*',
          //     // 'Access-Control-Request-Method': '*',
          //     'Origin': '*',
          //   },
          //   // headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` },
          //   body: JSON.stringify(data),

          //   ssl: false
          // };
          //   var request = require('request');
          //   request.post({
          //     uri: 'http://localhost:3000/data',
          //     headers: {'Content-Type': 'application/json'},
          //     body: JSON.stringify({"longUrl": "http://www.google.com/"})
          // });
          // fetch('http://localhost:3000/data', requestOptions
          // crossDomain:true,
          // {mode: "cors"},
          // method: "POST",
          // // credentials: 'include',
          // headers: {
          //   'Content-Type': 'application/json',
          //   'Access-Control-Request-Headers': '*',
          //   'Access-Control-Request-Method': '*',
          //   'Origin': '*',
          // )
          // .then((response) => response.json())
          // .then((result) => {
          //   setSourceDatastoreID(result.objectID);
          //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
          // })
          // .catch((error) => console.log(error));
          // console.log(requestOptions.body);
          // console.log("jwtToken: ", jwtToken);
          // console.log(Response);
          // document.getElementById("loader").style = {display: "block"};
          // setTimeout(function () {
          // document.getElementById("loader").style = {display: "None"};
          // alert(
          // "Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003"
          // );
          // }, 2000);
        } else {
          setSnackbarMessage("Please fill all the required fields.");
          setOpenSnackbar(true);
        }
        break;
      case 3:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
      case 4:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
      case 5:
        // if (name && owner && bootstrapServers && partitions && topicName) {
        //   const data = {
        //     owner: owner,
        //     name: name,
        //     datastoreType: "DATASTORE_KAFKA_CLUSTER",
        //     configs: {
        //       bootstrapServers: bootstrapServers,
        //     },
        //   };
          // const fetch = require('node-fetch');
          // const requestOptions = {
            // crossDomain:true,
            // url,
            // mode: "cors",
            // method: "POST",
            // credentials: 'include',
            // headers: {
              // "Content-Type": "application/json",
              // 'Access-Control-Request-Headers': '*',
              // 'Access-Control-Request-Method': '*',
              // Origin: "*",
            // },
            // headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` },
            // body: JSON.stringify(data),
// 
            // ssl: false,
          // };
          //   var request = require('request');
          //   request.post({
          //     uri: 'http://localhost:3000/data',
          //     headers: {'Content-Type': 'application/json'},
          //     body: JSON.stringify({"longUrl": "http://www.google.com/"})
          // });
          // fetch(
          //   "http://localhost:3000/",
          //   requestOptions
            // crossDomain:true,
            // {mode: "cors"},
            // method: "POST",
            // // credentials: 'include',
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Access-Control-Request-Headers': '*',
            //   'Access-Control-Request-Method': '*',
            //   'Origin': '*',
          // )
          //   .then((response) => response.json())
          //   .then((result) => {
          //     setSourceDatastoreID(result.objectID);
          //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
          //   })
          //   .catch((error) => console.log(error));
          // console.log(requestOptions.body);
          // console.log("jwtToken: ", jwtToken);
          // console.log(Response);
          // document.getElementById("loader").style = {display: "block"};
          // setTimeout(function () {
            // document.getElementById("loader").style = {display: "None"};
          //   alert(
          //     "Success. Output Resource UID: efca5736-edb2-11ed-a05b-0242ac120003"
          //   );
          // }, 2000);
        // } else {
        //   setSnackbarMessage("Please fill all the required fields.");
        //   setOpenSnackbar(true);
        // }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;

      default:
        break;

      // var qs = require("querystring");
      // var http = require("http");
      // var options = {
      //   "method": "POST",
      //   "hostname": "mockbin.org",
      //   "port": null,
      //   "path": "/bin/60c4a87a-d749-491b-a5ea-947fb1be88f6?foo=bar&foo=baz",
      //   "headers": {
      //     "cookie": "foo=bar; bar=baz"
      //   }
      // };
      //     } else {
      //       setSnackbarMessage("Please fill all the required fields.");
      //       setOpenSnackbar(true);
      //     }

      //     break;
      //   default:
      //     break;
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <StepperContainer>
        <Stepper activeStep={activeStep} style={{ padding: "30px 20px" }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperContainer>
      <div>
        {activeStep === steps.length ? (
          <Typography>
            Datastream created. You can close the form. <div> {owner}</div>
          </Typography>
        ) : (
          <div>
            <div>
              {getStepContent(
                activeStep,
                handleInputChange,
                handleSubmit,
                handleBack
              )}
            </div>
          </div>
        )}
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const StepperContainer = styled.div`
  width: 100%;
  border-bottom: 0.5px solid gray;
  display: inline-block;

  @media (max-width: 1200px) {
    display: none;
  }
`;
