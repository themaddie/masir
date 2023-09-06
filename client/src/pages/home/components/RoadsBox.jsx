// STYLE
import { styled, useTheme } from "styled-components";
import { AddRoad } from "@mui/icons-material";
// COMPONENT
import Label from "../../../components/Label";
// ROUTE
import { Link } from "react-router-dom";

const RoadsBox = () => {
  const { palette, fontSize, border } = useTheme();

  const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    color: ${palette.black};
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
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    padding: 0 5% 0 0;
  `;
  const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
  `;
  const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
  `;

  return (
    <Wrapper>
      <Title>
        <Text>مدیریت مسیرها</Text>
        <Link to="/roads" style={{ width: "22px", height: "22px" }}>
          <AddRoad
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
        <Right>
          <Label color={palette.roads.gray} name="زندگی" />
          <Label color={palette.roads.yellow} name="کار" />
          <Label color={palette.roads.pink} name="درس" />
        </Right>
        <Left>
          <Label color={palette.roads.purple} name="جلسه" />
          <Label color={palette.roads.green} name="کنکور" />
          <Label color={palette.roads.blue} name="تفریح" />
        </Left>
      </Content>
    </Wrapper>
  );
};

export default RoadsBox;
