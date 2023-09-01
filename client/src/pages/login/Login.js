import { styled, useTheme } from "styled-components";

const Login = () => {
  const { theme } = useTheme();
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  return (<Wrapper>
    login
  </Wrapper>);
};

export default Login;
