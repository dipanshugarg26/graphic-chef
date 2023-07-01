import React from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  Typography
} from "@mui/material";
import styled from "@emotion/styled";

const FormStep5 = ({ handleInputChange, handleSubmit, handleBack }) => {
  return (
    <Container>
      <Typography variant="h5">Confirm Datastream Metadata</Typography>
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
          <FormHelperText> Like wf-gcp-us-dip-sox-prod</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="owner"
            name="owner"
            label="Enter owner name."
            onChange={handleInputChange}
          />
          <FormHelperText> Leave it blank if owner is same.</FormHelperText>
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
          <FormHelperText className="classes.smallerText">
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
          <FormHelperText className="classes.smallerText">
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
    </Container>
  );
};

export default FormStep5;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin-top: 50px;
  gap: 40px;
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
