import styled from "styled-components";
import { Breakpoint } from "../../styles/breakpoints";
import { Color } from "../../styles/colors";

const StyledButton = styled.button<{ $disabled: boolean }>`
  background: ${Color.Blue};
  border: none;
  font-size: 24px;
  line-height: 35px;

  width: 100%;
  display: flex;
  justify-content: center;
  letter-spacing: -0.3px;

  color: ${Color.White};
  padding: 5px;

  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};

  @media (max-width: ${Breakpoint.LG}) {
    font-size: 20px;
    line-height: 25px;
  }

  @media (max-width: ${Breakpoint.MD}) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export { StyledButton };
