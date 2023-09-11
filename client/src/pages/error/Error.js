// STYLE
import { styled, useTheme } from "styled-components";
import { MeetingRoomRounded } from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";

const Error = () => {
    const { palette, fontSize } = useTheme();
    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${palette.neutral};
    `;
    const ErrNum = styled.h1`
    font-size: 5rem;
    color: ${palette.black};
    cursor: default;
    `;
    const NotFound = styled.h3`
    font-weight: 500;
    font-size: ${fontSize.medium}rem;
    color: ${palette.roads.pink};
    cursor: default;
    `;
    return (
        <Wrapper>
            <ErrNum>404</ErrNum>
            <NotFound>انگار اشتباهی اومدی...</NotFound>
            <Link to={"/"}>
                <MeetingRoomRounded style={{ color: `${palette.black}`, marginTop: "1.5rem" }} />
            </Link>
        </Wrapper>
    );
};

export default Error;