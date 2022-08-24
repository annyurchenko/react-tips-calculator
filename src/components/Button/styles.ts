import styled from "styled-components";
import { Breakpoint } from "../../styles/breakpoints";
import { Color } from "../../styles/colors";

const StyledButton = styled.button`
  background: ${Color.Blue};
  border: none;

  font-size: 24px;
  line-height: 35px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${Color.White};
  padding: 5px 110px;

  @media (max-width: ${Breakpoint.LG}) {
    font-size: 20px;
    line-height: 25px;
  }

  @media (max-width: ${Breakpoint.MD}) {
    font-size: 16px;
    line-height: 18px;
    padding: 5px 50px;
  }
`;

export { StyledButton };
