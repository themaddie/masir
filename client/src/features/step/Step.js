import { useState } from "react";
// STYLE
import { styled, useTheme } from "styled-components";
import { CheckBoxOutlineBlank, EditOutlined, CheckBox } from "@mui/icons-material";
// COMPONENTS
import EditStepModal from "./components/EditStepModal";

const Step = ({ step, label, done }) => {
    // STATE
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(!modal);
    };

    const { palette, fontSize, breakpoint, border } = useTheme();

    const Wrapper = styled.div`
    width: 90%;
    min-height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    border-right: ${border.size}px solid ${label};
    `;
    const Text = styled.span`
    max-width: 400px;
    max-height: 25px;
    overflow: scroll;
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    color: ${palette.black};
    cursor: default;
    text-decoration: ${done ? "line-through" : ""};
    text-align: right;
    @media (max-width: ${breakpoint.phone}px) {
    font-size: ${fontSize.lighter}rem;
    font-weight: 600;
    }
    `;
    const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 20%;
    @media (max-width: ${breakpoint.phone}px) {
    gap: 10%;
    }
    `;

    return (
        <Wrapper>
            <Text> {step} </Text>
            <Content>
                {
                    done ?
                        (<CheckBox style={{ width: "22px", height: "22px", cursor: "pointer" }} />) :
                        (<CheckBoxOutlineBlank style={{ width: "22px", height: "22px", cursor: "pointer" }} />)
                }
                <EditOutlined
                    style={{ width: "22px", height: "22px", cursor: "pointer" }}
                    onClick={modalHandler}
                />
            </Content>
            {modal ? <EditStepModal modalHandler={modalHandler} value={step} /> : ""}
        </Wrapper>
    );
};

export default Step;