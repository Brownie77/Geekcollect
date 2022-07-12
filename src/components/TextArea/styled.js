import styled from "styled-components";

const StyledTextArea = styled.textarea`
  height: 150px;
  width: 100%;
  padding: 12px 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  resize: none;
  outline: 0;
  border-radius: 4px;

  &:focus {
    outline: none !important;
    border-color: #1eb972;
  }
`;
export { StyledTextArea };
