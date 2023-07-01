import React from "react";
import CreatePipelines from "./components/CreatePipelines";
import Pipelines from "./components/Pipelines";
import styled from "@emotion/styled";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        <Route path="/create-pipelines" element={<CreatePipelines />} />
        <Route path="/pipelines" element={<Pipelines />} />
      </Routes>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
`;
