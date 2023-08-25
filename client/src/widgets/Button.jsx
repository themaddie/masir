import { styled } from "styled-components";

export const Button = styled.input.attrs((props) => ({
  type: "submit",
  onclick: (e) => e.preventDefault(),
}))`
  width: 400px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.palette.black};
  border-radius: 10px;
  background-color: ${(props) => props.backColor || props.theme.palette.white};
  cursor: pointer;
  text-align: center;
  font-family: "Dana";
  font-size: ${(props) => props.theme.fontSize.regular}rem;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.theme.palette.secondary};
  }
`;