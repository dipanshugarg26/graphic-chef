import React from "react";
import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

const FormStep3 = ({ handleInputChange, handleSubmit, handleBack }) => {
  return (
    <MyPaper elevation={0}>
      <Typography style={{ marginBottom: "10px" }} variant="h5">
        Select Sink Type
      </Typography>
      <Container>
        <CardContainerWrapper disabled>
          <CardContainer onClick={handleSubmit}>
            <ImageContainer>
              <img
                src="https://seeklogo.com/images/G/google-cloud-pub-sub-logo-B9E569CDE6-seeklogo.com.png"
                alt=""
                width="50"
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Typography variant="h7">PubSub</Typography>
          </CardContainer>
        </CardContainerWrapper>
        <CardContainerWrapper disabled>
          <CardContainer onClick={handleSubmit}>
            <ImageContainer>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1200px-Apache_kafka.svg.png"
                alt=""
                height="50"
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Typography variant="h7">Kafka</Typography>
          </CardContainer>
        </CardContainerWrapper>
        <CardContainerWrapper>
          <CardContainer onClick={handleSubmit}>
            <ImageContainer>
              <img
                src="https://www.clipartmax.com/png/small/200-2001825_bigquery-analytics-data-warehouse-google-cloud-big-query-icon.png"
                alt=""
                width="50"
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Typography variant="h7">Google BigQuery</Typography>
          </CardContainer>
        </CardContainerWrapper>
        <CardContainerWrapper disabled>
          <CardContainer onClick={handleSubmit}>
            <ImageContainer>
              <img
                src="https://dt-cdn.net/hub/Google_Storage-Logo.wine_NniLldt.svg"
                alt=""
                width="50"
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Typography variant="h7">Google GCS Bucket</Typography>
          </CardContainer>
        </CardContainerWrapper>
      </Container>
      <ButtonContainer>
        <CustomButton onClick={handleBack}>Back</CustomButton>
      </ButtonContainer>
    </MyPaper>
  );
};

export default FormStep3;

const MyPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 800px;
`;
const CardContainerWrapper = styled.div((props) => ({
  pointerEvents: props.disabled ? "none" : "auto",
  opacity: props.disabled ? "0.5" : "1",
}));
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all ease-in-out 0.2s;
  gap: 5px;

  :hover {
    scale: 1.1;
  }
`;
const ImageContainer = styled.div`
  background-color: rgb(237, 242, 253);
  border-radius: 20px;
  padding: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CustomButton = styled.button`
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
