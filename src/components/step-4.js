import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";

const FormStep4 = ({ handleInputChange, handleSubmit, handleBack }) => {
  return (
    <MyPaper elevation={0}>
      <Typography variant="h5">Enter Sink Details</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="GCP Project"
            name="GCP Project"
            label="Enter GCP Project name"
            required
            onChange={handleInputChange}
          />
          <FormHelperText>Like wf-gcp-us-dip-sox-prod</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="owner"
            name="owner"
            label="Enter owner name."
            required
            onChange={handleInputChange}
          />
          <FormHelperText>Leave it blank if owner is same.</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="GBQ Dataset"
            name="GBQ Dataset"
            label="Enter GBQ Dataset name"
            required
            onChange={handleInputChange}
          />
          <FormHelperText>
            GCP datasets must be created prior to submitting this request.
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="GBQ Dataset"
            name="GBQ Dataset"
            label="Enter GBQ Dataset name"
            required
            onChange={handleInputChange}
          />
          <FormHelperText>
            The Destination GBQ table defaults to the Kafka Topic Name Streams
            owners can explicitly provide Destination GBQ Table in the
            following. Note: All table names must be snake case and pass
            validation here.
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="Labels"
            name="Labels"
            label="Enter lowercase labels."
            defaultValue={"env:prod,processing_engine:brooklin"}
            required
            // onKeyPress={{handleKeyPress}}
            onChange={handleInputChange}
          />
          <FormHelperText>
            An all lower case comma-delimited list of labels and tags to add to
            “Destination GBQ tables”. The format for a label is key:value.
          </FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="partitionExpirationDays"
            name="partitionExpirationDays"
            label="Enter the number of Partition Expiration Days."
            defaultValue={"env:prod,processing_engine:brooklin"}
            required
            type="number"
            // onKeyPress={{handleKeyPress}}
            onChange={handleInputChange}
          />
          <FormHelperText>
            An all lower case comma-delimited list of labels and tags to add to
            “Destination GBQ tables”. The format for a label is key:value.
          </FormHelperText>
        </Grid>
      </Grid>
      <Grid container>
        <ButtonContainer>
          <CustomBackButton onClick={handleBack}>Back</CustomBackButton>
          <CustomButton onClick={handleSubmit}>Submit</CustomButton>
        </ButtonContainer>
      </Grid>
    </MyPaper>
  );
};

export default FormStep4;

const MyPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
  max-width: 1000px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const CustomButton = styled.button`
  background-color: #104184;
  padding: 15px 50px;
  color: white;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 14px;
  transition: all ease 0.2s;

  :hover {
    background-color: #3e86e8;
  }
`;
const CustomBackButton = styled.button`
  background-color: #e60006;
  padding: 15px 50px;
  color: white;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 14px;
  transition: all ease 0.2s;

  :hover {
    background-color: #ff292f;
  }
`;
