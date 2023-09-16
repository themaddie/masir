// STYLE
import { styled } from "styled-components";
// COMPONENT
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileForm from "../../components/form/ProfileForm";

const Profile = () => {
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
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
      <Header title="پروفایل" />
      <Content>
        <ProfileForm />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Profile;
