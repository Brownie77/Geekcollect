import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts[2]};
  font-size: 48px;
  letter-spacing: 0.12px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function PageTitle({ children }) {
  return (
    <TitleWrapper>
      <StyledTitle>{children}</StyledTitle>
    </TitleWrapper>
  );
}

export default PageTitle;
