// STYLE
import { styled, useTheme } from "styled-components";

const Label = ({ name, color }) => {
  const { fontSize } = useTheme();

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    margin: 0 10px 5px 10px;
  `;
  const Color = styled.div`
    min-width: 15px;
    min-height: 15px;
    border-radius: 50%;
    background-color: ${color};
    cursor: default;
  `;
  const Name = styled.h6`
    font-size: ${fontSize.lighter}rem;
    font-weight: normal;
    cursor: default;
  `;
  return (
    <Wrapper>
      <Color></Color>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default Label;
