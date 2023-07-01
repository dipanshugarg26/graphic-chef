import styled from "@emotion/styled";
import React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <Items>
        <Link to="/">
          <CustomLogoDevIcon />
        </Link>
        <Link to="create-pipelines/">
          <CustomAddToPhotosIcon />
        </Link>
        <Link to="/pipelines">
          <CustomGridViewIcon />
        </Link>
      </Items>
      <ItemsBottom>
        <CustomSettingsIcon />
      </ItemsBottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #0A1828;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const ItemsBottom = styled.div``;
const CustomLogoDevIcon = styled(LogoDevIcon)`
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin-bottom: 20px;
`;
const CustomAddToPhotosIcon = styled(AddToPhotosIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    scale: 1.15;
  }
`;
const CustomGridViewIcon = styled(GridViewIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    scale: 1.15;
  }
`;
const CustomSettingsIcon = styled(SettingsIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    scale: 1.15;
  }
`;
