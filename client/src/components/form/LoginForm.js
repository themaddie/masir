// STYLE
import { styled, useTheme } from "styled-components";
import {
  BadgeOutlined,
  LockOutlined,
} from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { palette, fontSize, breakpoint, border } = useTheme();

  const Form = styled.form`
    width: 100%;
  `;
  const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: ${breakpoint.tablet}px) {
      flex-direction: column;
    }
  `;
  const Container = styled.div`
    width: 25%;
    height: 100px;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
  `;
  const Title = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: ${border.size}px solid ${palette.black};
    border-top-right-radius: ${border.radius}px;
    border-top-left-radius: ${border.radius}px;
    border-bottom: none;
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    cursor: default;
  `;
  const Input = styled.input`
    width: 100%;
    height: 50px;
    border: ${border.size}px solid ${palette.black};
    border-bottom-right-radius: ${border.radius}px;
    border-bottom-left-radius: ${border.radius}px;
    background-color: ${palette.neutral};
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    padding: 2%;
  `;
  const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0 0 0;
  `;
  const Box = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
  `;
  const Or = styled.span`
  display: block;
  cursor: default;
  padding-top: 5px;
`;
  const Dashed = styled.div`
    width: 45%;
    height: 18px;
    border-bottom: ${border.size}px dashed ${palette.black};
  `;
  const Submit = styled.input.attrs((props) => ({
    type: "submit",
    value: "ورود",
  }))`
    width: 25%;
    height: 50px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    background-color: ${palette.primary};
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    cursor: pointer;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
    &:hover {
      background-color: ${palette.secondary};
    }
  `;
  const Signup = styled.button`
    width: 25%;
    height: 50px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    background-color: ${palette.white};
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 2rem;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
    &:hover {
      background-color: ${palette.secondary};
    }
  `;
  return (
    <Form>
      <Row>
        <Container>
          <Title>
            <BadgeOutlined />
            نام کاربری
          </Title>
          <Input type="text" />
        </Container>
        <Container>
          <Title>
            <LockOutlined />
            رمز ورود
          </Title>
          <Input type="password" />
        </Container>
      </Row>
      <Column>
        <Link style={{ width: "100%" }} to="/home">
          <Submit />
        </Link>
        <Box>
          <Dashed />
          <Or>یا</Or>
          <Dashed />
        </Box>
        <Link style={{ width: "100%" }} to="/signup">
          <Signup>ثبت نام</Signup>
        </Link>
      </Column>
    </Form>
  );
};

export default LoginForm;
