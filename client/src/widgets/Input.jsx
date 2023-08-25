import { styled } from "styled-components";
import {
  EmailOutlined,
  LockOutlined,
  BadgeOutlined,
} from "@mui/icons-material";

const Input = ({ title, type, icon, inputColor, titleColor }) => {
  const Wrapper = styled.div`
    width: 400px;
    height: 100px;
    border-radius: 10px;
  `;
  const Container = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    border: 2px solid ${(props) => props.theme.palette.black};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: none;
    background-color: ${(props) => titleColor || props.theme.palette.secondary};
    cursor: default;
  `;
  const Title = styled.h5`
    font-family: "Dana";
    font-size: ${(props) => props.theme.fontSize.regular}rem;
    font-weight: normal;
  `;
  const Input = styled.input`
    width: 100%;
    height: 50%;
    border: 2px solid ${(props) => props.theme.palette.black};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${(props) => inputColor || props.theme.palette.white};
    text-align: center;
    font-family: "Dana";
    font-size: ${(props) => props.theme.fontSize.light}rem;
  `;
  return (
    <Wrapper>
      <Container>
        {type === "email" && <EmailOutlined />}
        {type === "password" && <LockOutlined />}
        {icon ? <BadgeOutlined /> : ""}
        <Title>{title}</Title>
      </Container>
      <Input type={type} />
    </Wrapper>
  );
};

export default Input;
