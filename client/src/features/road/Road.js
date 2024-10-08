import { useState } from "react";
// STYLE
import { styled, useTheme } from "styled-components";
import { Add, EditRoad } from "@mui/icons-material";
// COMPONENT
import Step from "../step/Step";
import AddToRoadModal from "./components/AddToRoadModal";
import EditRoadModal from "./components/EditRoadModal";

const Road = ({ name, color }) => {
  // STATE
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };
  const editModalHandler = () => {
    setEditModal(!editModal);
  };

  // STYLE
  const { palette, fontSize, breakpoint, border } = useTheme();

  const Wrapper = styled.div`
    width: 60%;
    height: 300px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    @media (max-width: ${breakpoint.tablet}px) {
        width: 80%;
    }
    @media (max-width: ${breakpoint.phone}px) {
        width: 90%;
    }
    `;
  const Title = styled.div`
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      padding: 0 4.5% 0 5%;
      align-items: center;
      border-top-left-radius: ${border.radius}px;
      border-top-right-radius: ${border.radius}px;
      border-bottom: ${border.size}px dashed ${palette.black};
      background-color: ${palette.neutral};
    `;
  const Text = styled.h2`
      font-size: ${fontSize.regular}rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 5px;
    `;
  const Label = styled.span`
      font-size: ${fontSize.regular}rem;
      font-weight: 600;
      color: ${color};
    `;
  const Content = styled.div`
      width: 100%;
      max-height: calc(100% - 80px);
      margin: 15px 0 5px 0;
      overflow: scroll;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 25px;
    `;
  return (
    <Wrapper>
      <Title>
        <Text> <EditRoad style={{ cursor: "pointer", color: { color } }} onClick={editModalHandler} /> مسیر <Label>{name}</Label></Text>
        <Add style={{ width: "32px", height: "32px", cursor: "pointer" }} onClick={modalHandler} />
      </Title>
      <Content>
        <Step label={color} />
        <Step />
        <Step />
        <Step />
        <Step />
      </Content>
      {modal ? <AddToRoadModal modalHandler={modalHandler} name={name} color={color} /> : ""}
      {editModal ? <EditRoadModal modalHandler={editModalHandler} name={name} color={color} /> : ""}
    </Wrapper>
  );
};

export default Road;