import { styled } from "styled-components";
import { useTheme } from "styled-components";
// IMG
import MasirLogo from "../images/MasirLogo.svg";
// WIDGETS
import { Button } from "../widgets/Button";
import Input from "../widgets/Input";
import Dashed from "../widgets/Dashed";

const Signup = () => {
  const { palette } = useTheme();
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  `;
  const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `;
  const Logo = styled.img`
    cursor: pointer;
    margin: 2rem 0 0 0;
  `;
  return (
    <div>
      <Wrapper>
        <Logo src={MasirLogo} alt="Logo" />
        <Container>
          <Input
            title="نام"
            type="text"
            icon="true"
            titleColor={palette.white}
            inputColor={palette.neutral}
          />
          <Input
            title="نام کاربری"
            type="text"
            icon="true"
            titleColor={palette.white}
            inputColor={palette.neutral}
          />
        </Container>
        <Container>
          <Input
            title="ایمیل"
            type="email"
            titleColor={palette.white}
            inputColor={palette.neutral}
          />
          <Input
            title="رمز ورود"
            type="password"
            titleColor={palette.white}
            inputColor={palette.neutral}
          />
        </Container>
        <Box>
          <Button value="ورود" backColor={palette.primary} />
          <Dashed text="یا" />
          <Button value="ثبت‌نام" />
        </Box>
      </Wrapper>
    </div>
  );
};

export default Signup;
