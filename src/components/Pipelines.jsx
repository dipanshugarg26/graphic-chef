import styled from "@emotion/styled";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pipeline from "./Pipeline";

const dummyData = [
  {
    title: "User Behavior",
    paused: true,
    input_db_logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
    input_db: "PostgreSQL",
    output_db: "Google BigQuery",
    output_db_logo:
      "https://www.clipartmax.com/png/small/200-2001825_bigquery-analytics-data-warehouse-google-cloud-big-query-icon.png",
  },
  {
    title: "Transaction Data",
    paused: false,
    input_db_logo:
      "https://seeklogo.com/images/G/google-cloud-pub-sub-logo-B9E569CDE6-seeklogo.com.png",
    input_db: "PubSub",
    output_db: "kafka",
    output_db_logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1200px-Apache_kafka.svg.png",
  },
];

const Pipelines = () => {
  const [inputQuery, setInputQuery] = useState("");

  return (
    <Container>
      <Typography
        style={{ width: "100%", marginBottom: "5px", maxWidth: '1400px' }}
        variant="h5"
        fontFamily={"monospace"}
      >
        PIPELINES
      </Typography>
      <Typography
        style={{ fontSize: "16px", width: "100%", marginBottom: "30px", maxWidth: '1400px' }}
        variant="p"
        fontFamily={"monospace"}
      >
        9 Pipelines found
      </Typography>
      <InputContainer>
        <SearchIcon />
        <Input
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Search Pipelines"
        />
      </InputContainer>
      <PipelinesContainer>
        <PipelinesHeader>
          <Typography
            style={{ fontSize: "16px", color: "gray" }}
            variant="p"
            fontFamily={"sans-serif"}
          >
            9 Pipelines found
          </Typography>
          <FiltersContainer>
            <Filters>
              <Typography
                style={{ fontSize: "16px" }}
                variant="p"
                fontFamily={"sans-serif"}
              >
                Destination
              </Typography>
              <KeyboardArrowDownIcon />
            </Filters>
            <Filters>
              <Typography
                style={{ fontSize: "16px" }}
                variant="p"
                fontFamily={"sans-serif"}
              >
                Status
              </Typography>
              <KeyboardArrowDownIcon />
            </Filters>
          </FiltersContainer>
        </PipelinesHeader>
        <PipelinesContainerMain>
          {dummyData.map((data, i) => (
            <Pipeline key={i} data={data} />
          ))}
        </PipelinesContainerMain>
      </PipelinesContainer>
    </Container>
  );
};

export default Pipelines;

const Container = styled.div`
  padding: 20px;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1400px;

  > .MuiSvgIcon-root {
    position: absolute;
    left: 20px;
    cursor: pointer;
    color: gray;
    font-size: 25px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 20px 30px;
  padding-left: 50px;
  outline: none;
  font-size: 18px;
`;
const PipelinesContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  max-width: 1400px;
`;
const PipelinesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FiltersContainer = styled.div`
  display: flex;
  gap: 30px;
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
const PipelinesContainerMain = styled.div`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
