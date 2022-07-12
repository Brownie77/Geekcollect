import React from "react";
import { CustomInput } from "./styled";

function Input(props) {
  return (
    <CustomInput
      {...props}
      onChange={(e) => props.onChange(e.target.value)}
      type="text"
      placeholder="Add Name..."
    ></CustomInput>
  );
}
export default Input;
