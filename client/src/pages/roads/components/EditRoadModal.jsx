// STYLE
import { styled, useTheme } from "styled-components";
import { Close } from "@mui/icons-material";

const EditRoadModal = () => {
  const { palette, fontSize, breakpoint, border } = useTheme();

  const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `;
  const Modal = styled.div`
    width: 40%;
    height: 500px;
    border-radius: ${border.radius}px;
    background-color: ${palette.neutral};
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 90%;
    }
  `;
  const ModalTitle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    align-items: center;
    background-color: ${palette.alt};
    border-top-left-radius: ${border.radius}px;
    border-top-right-radius: ${border.radius}px;
    border-bottom: ${border.size}px dashed ${palette.black};
  `;
  const ModalText = styled.h2`
    font-size: ${fontSize.medium}rem;
    font-weight: 600;
    cursor: default;
    @media (max-width: ${breakpoint.phone}px) {
      font-size: ${fontSize.regular}rem;
    }
  `;
  const ModalContent = styled.form`
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const InputContainer = styled.div`
    width: 50%;
    height: 100px;
    margin: 0 0 1rem 0;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
  `;
  const InputTitle = styled.h5`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: ${border.size}px solid ${palette.black};
    border-top-right-radius: ${border.radius}px;
    border-top-left-radius: ${border.radius}px;
    border-bottom: none;
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    background-color: ${palette.secondary};
  `;
  const Input = styled.input`
    width: 100%;
    height: 50px;
    border: ${border.size}px solid ${palette.black};
    border-bottom-right-radius: ${border.radius}px;
    border-bottom-left-radius: ${border.radius}px;
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: normal;
    background-color: ${palette.white};
  `;
  const Select = styled.select`
    width: 100%;
    height: 50px;
    padding: 2%;
    border: ${border.size}px solid ${palette.black};
    border-bottom-right-radius: ${border.radius}px;
    border-bottom-left-radius: ${border.radius}px;
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: normal;
    background-color: ${palette.white};
  `;
  const ModalSubmit = styled.input.attrs((props) => ({
    type: "submit",
    value: "ثبت",
  }))`
    width: 50%;
    height: 50px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    background-color: ${palette.primary};
    text-align: center;
    color: ${palette.black};
    font-size: ${fontSize.light}rem;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem 0 0 0;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 70%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 80%;
    }
    &:hover {
      background-color: ${palette.secondary};
    }
  `;
  const Row = styled.div`
    max-width: 90%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 5px;
    margin: 1rem 0 0 0;
  `;

  return (
    <ModalWrapper>
      <Modal>
        <ModalTitle>
          <ModalText>اضافه کردن به مسیر</ModalText>
          <Close style={{ width: "28px", height: "28px", cursor: "pointer" }} />
        </ModalTitle>
        <ModalContent>
          <InputContainer>
            <InputTitle>نام مسیر</InputTitle>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>اولویت مسیر</InputTitle>
            <Select>
            <option>اول</option>
            <option>دوم</option>
            <option>سوم</option>
            <option>چهارم</option>
            <option>پنجم</option>
            <option>ششم</option>
            </Select>
          </InputContainer>
          <ModalSubmit />
        </ModalContent>
      </Modal>
    </ModalWrapper>
  );
};

export default EditRoadModal;
