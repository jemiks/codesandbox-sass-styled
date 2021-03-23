import styled, { css } from "styled-components";

const btnWidth = 200;
const btnHeight = 20;

const buttonColors = {
  btnDanger: "#dc3545",
  btnPrimary: "#007bff",
  btnWarning: "#ffc107"
};

export const StyledButtonContainer = styled.button`
  color: #ffffff;
  width: ${btnWidth / 2}px;
  height: ${btnHeight * 2}px;
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
