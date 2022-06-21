import React from "react";
import { StyledTextArea } from "./styled";

function TextArea(props) {
  return (
    <StyledTextArea onChange={(e) => props.changeDescription(e.target.value)} />
  );
}

export default TextArea;
