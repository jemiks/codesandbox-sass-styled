import React from "react";
import { StyledButtonContainer } from "./StyledButtonStyles";

const StyledButton = ({ type }) => {
  return (
    <StyledButtonContainer btnColors={type}>
      styled comp button
    </StyledButtonContainer>
  );
};

export default StyledButton;
