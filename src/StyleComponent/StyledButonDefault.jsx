import React from "react";
import { StyledButtonContainer } from "./StyledButonDefaultStyles";

const StyledButtonDefault = ({ danger, primary, warning }) => {
  return (
    <StyledButtonContainer danger={danger} primary={primary} warning={warning}>
      styled comp button
    </StyledButtonContainer>
  );
};

export default StyledButtonDefault;
