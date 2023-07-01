import styled from "@emotion/styled";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FolderIcon from "@mui/icons-material/Folder";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography, Button } from "@mui/material";

const Pipeline = ({ data }) => {
  const output_title =
    data.output_db.split(" ").length > 1
      ? data.output_db.split(" ")[1]
      : data.output_db.split(" ")[0];

  return (
    <Container>
      <InputContainer>
        <ImageContainer>
          <img
            src={data.input_db_logo}
            alt=""
            height="50"
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>
        <InfoContainer>
          <Typography
            style={{ fontSize: "16px", width: "100%", fontWeight: 600 }}
            fontFamily={"sans-serif"}
          >
            {data.title.length > 10
              ? data.title.substr(0, 11) + "..."
              : data.title}
          </Typography>
          <Typography
            style={{ fontSize: "14px", width: "100%", color: "gray" }}
            fontFamily={"sans-serif"}
          >
            {data.input_db}
          </Typography>
        </InfoContainer>
      </InputContainer>
      <Arrow>
        <EastIcon />
      </Arrow>
      <OutputContainer>
        <ImageContainer>
          <img
            src={data.output_db_logo}
            alt=""
            height="50"
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>
        <InfoContainer>
          <Typography
            style={{ fontSize: "16px", width: "100%", fontWeight: 600 }}
            fontFamily={"sans-serif"}
          >
            {output_title.length > 10
              ? output_title.substr(0, 11) + "..."
              : output_title}
          </Typography>
          <Typography
            style={{ fontSize: "14px", width: "100%", color: "gray" }}
            fontFamily={"sans-serif"}
          >
            {data.output_db}
          </Typography>
        </InfoContainer>
      </OutputContainer>
      <MenuContainer>
        <FormatListBulletedIcon />
        <CloudUploadIcon />
        <FolderIcon />
      </MenuContainer>
      <ButtonsContainer>
        {data.paused ? (
          <>
            <Button variant="contained" color="warning">
              PAUSED
            </Button>
            <Button variant="contained" color="info">
              RESUME
            </Button>
          </>
        ) : (
          <Button variant="contained" color="success">
            ACTIVE
          </Button>
        )}
      </ButtonsContainer>
    </Container>
  );
};

export default Pipeline;

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  transition: all ease-in-out 0.1s;

  :hover {
    background-color: #f0f0f0;
  }
`;
const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 200px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Arrow = styled.div`
  > .MuiSvgIcon-root {
    color: yellowgreen;
    font-size: 40px;
  }
`;
const OutputContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 200px;
  align-items: center;
  justify-content: flex-start;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 130px;

  > .MuiSvgIcon-root {
    color: #000000;
    font-size: 30px;
    cursor: pointer;
    transition: all ease-in-out 0.1s;

    :hover {
      color: #1135ff;
    }
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 210px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
