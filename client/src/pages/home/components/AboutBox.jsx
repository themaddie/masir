// STYLE
import { styled, useTheme } from "styled-components";
import { QuestionMarkOutlined } from "@mui/icons-material";
// IMG
import MasirLogo from "../../../assets/images/MasirLogo.svg";
// ROUTE
import { Link } from "react-router-dom";

const AboutBox = () => {
  const { palette, fontSize, border } = useTheme();

  const Wrapper = styled.div`
    width: 48%;
    min-height: 150px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    color: ${palette.black};
    overflow: scroll;
  `;
  const Title = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: ${border.radius}px;
    border-top-right-radius: ${border.radius}px;
    border-bottom: ${border.size}px dashed ${palette.black};
    background-color: ${palette.neutral};
  `;
  const Content = styled.div`
    width: 100%;
    min-height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 0 10px 0;
  `;
  const Logo = styled.img`
    width: 50%;
    cursor: default;
  `;
  const Text = styled.span`
    text-align: center;
    cursor: default;
    font-size: ${fontSize.light}rem;
    font-weight: normal;
  `;
  return (
    <Wrapper>
      <Title>
        <Link to="/page/about" style={{ width: "22px", height: "22px" }}>
          <QuestionMarkOutlined
            style={{
              width: "22px",
              height: "22px",
              cursor: "pointer",
              color: `${palette.black}`,
            }}
          />
        </Link>
      </Title>
      <Content>
        <Logo src={MasirLogo} />
        <Text>رو بهتر بشناس!</Text>
      </Content>
    </Wrapper>
  );
};

export default AboutBox;
