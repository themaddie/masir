// STYLE
import { styled, useTheme } from "styled-components";
import { ManageAccountsOutlined } from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";

const ProfileBox = ({ name }) => {
  const { palette, fontSize, breakpoint, border } = useTheme();

  const Wrapper = styled.div`
    width: 48%;
    max-height: 150px;
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
    text-align: center;
    margin: 5px 0 5px 0;
  `;
  const Text = styled.span`
    text-align: center;
    cursor: default;
    font-size: ${fontSize.light}rem;
    font-weight: normal;
    @media (max-width: ${breakpoint.phone}px) {
      font-size: ${fontSize.lighter}rem;
    }
  `;
  return (
    <Wrapper>
      <Title>
        <Link to="/page/profile" style={{ width: "22px", height: "22px" }}>
          <ManageAccountsOutlined
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
        <Text>خوش اومدی،</Text>
        <Text>{name}!</Text>
      </Content>
    </Wrapper>
  );
};

export default ProfileBox;
