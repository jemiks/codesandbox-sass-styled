import React from "react";
import { StyledButtonContainer } from "./StyledButtonStyles";

const StyledButton = ({ danger, primary, warning, type }) => {
  return (
    <StyledButtonContainer
      btnColors={type}
      danger={danger}
      primary={primary}
      warning={warning}
    >
      styled comp button
    </StyledButtonContainer>
  );
};

export default StyledButton;
