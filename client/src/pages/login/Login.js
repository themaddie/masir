import Input from "../widgets/Input";
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
    <Input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike" icon="false"/>
  </Wrapper>);
};

export default Login;
