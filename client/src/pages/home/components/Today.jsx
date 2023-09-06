// STYLE
import { styled, useTheme } from "styled-components";
import { Add } from "@mui/icons-material";
// COMPONENT
import Step from "../../../features/step/Step";

const Today = () => {
  const { palette, fontSize, breakpoint, border } = useTheme();

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    color: ${palette.black};
  `;
  const Title = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    align-items: center;
    border-top-left-radius: ${border.radius}px;
    border-top-right-radius: ${border.radius}px;
    border-bottom: ${border.size}px dashed ${palette.black};
    background-color: ${palette.primary};
  `;
  const Text = styled.h1`
    font-size: ${fontSize.medium}rem;
    font-weight: 600;
    cursor: default;
    @media (max-width: ${breakpoint.phone}px) {
      font-size: ${fontSize.regular}rem;
    }
  `;
  const Content = styled.div`
    width: 100%;
    max-height: calc(100% - 110px);
    overflow: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0 5px 0;
    gap: 25px;
  `;
  return (
    <Wrapper>
      <Title>
        <Text>گام‌های امروز</Text>
        <Add style={{ width: "32px", height: "32px", cursor: "pointer" }} />
      </Title>
      <Content>
        <Step step="پیانو" label={palette.roads.gray} done={true} />
        <Step step="پروژه ری اکت" label={palette.roads.pink} done={false} />
        <Step step="تمیز کردن خونه" label={palette.roads.pink} done={false} />
        <Step step="قصه نوشتن" label={palette.roads.purple} done={false} />
        <Step step="کنکور" label={palette.roads.blue} done={true} />
        <Step
          step="غذا درست کردن برای مهمونی فردا که خیلی مهم و حیاتیه"
          label={palette.roads.green}
          done={false}
        />
        <Step step="تسک ۸" label={palette.roads.blue} done={false} />
        <Step step="تسک ۹" label={palette.roads.yellow} done={false} />
        <Step step="10" label={palette.roads.pink} done={false} />
        <Step step="11" label={palette.roads.pink} done={false} />
        <Step step="12" label={palette.roads.pink} done={false} />
        <Step step="13" label={palette.roads.pink} done={false} />
        <Step step="14" label={palette.roads.pink} done={false} />
        <Step step="15" label={palette.roads.green} done={false} />
      </Content>
    </Wrapper>
  );
};

export default Today;
