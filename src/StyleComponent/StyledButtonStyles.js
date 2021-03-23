import styled, { css } from "styled-components";

const buttonColors = {
  btnDanger: "#dc3545",
  btnPrimary: "#007bff",
  btnWarning: "#ffc107"
};

// export const StyledButtonContainer = styled.button`
//   color: #ffffff;
//   width: 100px;
//   height: 40px;
//   border-radius: 8px;
//   border: none;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(p) => buttonColors[p.btnColors]};
// `;

export const StyledButtonContainer = styled.button`
  color: #ffffff;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.primary &&
    css`
      background-color: ${buttonColors.btnPrimary};
    `};
  ${(props) =>
    props.danger &&
    css`
      background-color: ${buttonColors.btnDanger};
    `};
  ${(props) =>
    props.warning &&
    css`
      background-color: ${buttonColors.btnWarning};
    `};
`;
