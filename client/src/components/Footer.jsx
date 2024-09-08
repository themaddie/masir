// STYLE
import { styled, useTheme } from "styled-components";
import { MeetingRoomRounded } from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";

const Footer = () => {
  const { palette, border } = useTheme();

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const Dashed = styled.div`
    width: 48%;
    height: 75px;
    border-top: ${border.size}px dashed ${palette.black};
  `;
  
  return (
    <Wrapper>
      <Link to={"/home"}>
        <MeetingRoomRounded style={{ color: `${palette.black}` }} />
      </Link>
    </Wrapper>
  );
};

export default Footer;
