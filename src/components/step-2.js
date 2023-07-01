import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const FormStep2 = ({ handleInputChange, handleSubmit, handleBack }) => {
  return (
    <Container>
      <Typography variant="h5">Enter Source Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Enter name"
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="owner"
            name="owner"
            label="Enter owner"
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            // qaria-describedby="outlined-weight-helper-text"
            id="bootstrapServers"
            name="bootstrapServers"
            label="Enter bootstrap servers"
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="partitions"
            name="partitions"
            label="Enter partitions"
            type="number"
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="topicName"
            name="topicName"
            label="Enter topic name"
            required
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="schema"
            name="schema"
            label="Enter schema"
            type="url"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="offset-label">Select offset</InputLabel>
            <Select
              labelId="offset-label"
              id="offset"
              name="offset"
              fullWidth
              required
              variant="outlined"
              onChange={handleInputChange}
            >
              <MenuItem value="earliest">Earliest</MenuItem>
              <MenuItem value="latest">Latest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="deadLetterTable"
            name="deadLetterTable"
            label="Enter dead letter table"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="partitionColumn"
            name="partitionColumn"
            label="Enter partition column"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="bo1-label">Is it a part of BO1 exit?</InputLabel>
            <Select
              labelId="bo1-label"
              id="bo1"
              name="bo1"
              fullWidth
              required
              onChange={handleInputChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
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

export default FormStep2;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-top: 40px;
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
