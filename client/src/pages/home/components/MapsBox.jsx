// STYLE
import { styled, useTheme } from "styled-components";
import { MapOutlined } from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";

const MapsBox = () => {
  const { palette, fontSize, border } = useTheme();

  const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
  `;
  const Title = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    align-items: center;
    border-top-left-radius: ${border.radius}px;
    border-top-right-radius: ${border.radius}px;
    border-bottom: ${border.size}px dashed ${palette.black};
    background-color: ${palette.neutral};
  `;
  const Text = styled.h2`
    font-size: ${fontSize.light}rem;
    font-weight: 600;
    cursor: default;
  `;
  const Content = styled.div`
    width: 100%;
    min-height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Desc = styled.span`
    color: ${palette.disable};
    cursor: default;
    font-size: ${fontSize.light}rem;
    text-align: center;
  `;
  
  return (
    <Wrapper>
      <Title>
        <Text>مدیریت نقشه‌ها</Text>
        <Link to="/maps" style={{ width: "22px", height: "22px" }}>
          <MapOutlined
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
        <Desc>فعلا هیچ نقشه‌ای نداریم...</Desc>
      </Content>
    </Wrapper>
  );
};

export default MapsBox;
