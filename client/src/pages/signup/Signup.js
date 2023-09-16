// STYLE
import { styled } from "styled-components";
// IMG
import MasirLogo from "../../assets/images/MasirLogo.svg";
// COMPONENT
import SignupForm from "../../components/form/SignupForm";

const Signup = () => {

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
  const Content = styled.div`
   min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  return (
    <Wrapper>
      <Logo src={MasirLogo} />
      <Content>
        <SignupForm />
      </Content>
    </Wrapper>
  );
};

export default Signup;
