import styled from "styled-components";
import { Breakpoint } from "../../styles/breakpoints";
import { Color } from "../../styles/colors";

const StyledInput = styled.input`
  font-size: 18px;
  line-height: 26px;

  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${Color.Black};

  background: ${Color.White};
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 10px 0;
  margin-bottom: 30px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: ${Breakpoint.LG}) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (max-width: ${Breakpoint.MD}) {
    font-size: 15px;
    line-height: 16px;
    margin-bottom: 20px;
  }
`;

export { StyledInput };
