import React from "react";
import { StyledSelect } from "./styled";
import { options } from "./constans";

function Select(props) {
  return (
    <StyledSelect
      onChange={(e) => props.select(e.target.value)}
      id="select-collection"
      name="select"
    >
      {options.map((option) => (
        <option key={option.id} value={option.key}>
          {option.value}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
