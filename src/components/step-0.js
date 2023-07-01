import React from "react";
import {
  Select,
  InputLabel,
  FormControl,
  Grid,
  Paper,
  Typography,
  MenuItem,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";

const FormStep0 = ({ handleInputChange, handleSubmit }) => {
  return (
    <MyPaper elevation={0}>
      <Typography variant="h5">Pipeline Selection</Typography>
      <Grid container alignItems="center" justifyContent="center" rowGap={3}>
        <Grid item xs={12}>
          <MyFormControl>
            <InputLabel id="pipelineName-label">
              Select pipeline name
            </InputLabel>
            <Select
              labelId="pipelineName-label"
              id="pipelineName"
              name="pipelineName"
              fullWidth
              required
              onChange={handleInputChange}
              variant="outlined"
              label="Select pipeline name"
            >
              <MenuItem value="Brooklin">Brooklin</MenuItem>
              <MenuItem value="Spandan">Spandan</MenuItem>
              <MenuItem value="Tremor">Tremor</MenuItem>
            </Select>
          </MyFormControl>
        </Grid>
        <Grid item xs={12}>
          <MyFormControl>
            <TextField
              multiline
              fullWidth
              id="jwtToken"
              name="jwtToken"
              label="Enter bearer token"
              required
              variant="outlined"
              onChange={handleInputChange}
            />
          </MyFormControl>
        </Grid>
        <Grid item xs={12}>
          <ButtonContainer>
            <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          </ButtonContainer>
        </Grid>
      </Grid>
    </MyPaper>
  );
};

export default FormStep0;

const MyPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
`;
const MyFormControl = styled(FormControl)`
  min-width: 200px;
  width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
