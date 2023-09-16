// STYLE
import { styled } from "styled-components";
// IMG
import MasirLogo from "../../assets/images/MasirLogo.svg";
// COMPONENT
import LoginForm from "../../components/form/LoginForm";

const Login = () => {
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
  `;
  const Logo = styled.img`
    cursor: default;
    width: 200px;
    max-height: 170px;
    margin-top: 4rem;
  `;
  const Slogan = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  cursor: default;
  `;
  const Content = styled.div`
   min-height: calc(100vh - 170px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  return (
    <Wrapper>
      <Logo src={MasirLogo} />
      <Slogan>بیا از مسیر لذت ببریم! :)</Slogan>
      <Content>
        <LoginForm />
      </Content>
    </Wrapper>
  );
};

export default Login;
