import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Breakpoint } from "../../ui/breakpoints";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 50px;

  @media (max-width: ${Breakpoint.LG}px) {
    padding: 25px;
  }

  @media (max-width: ${Breakpoint.MD}px) {
    padding: 50px 15px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 43px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.3px;
  margin-block: 20px;

  color: ${Color.Black};

  @media (max-width: ${Breakpoint.LG}px) {
    font-size: 30px;
    line-height: 32px;
  }

  @media (max-width: ${Breakpoint.MD}px) {
    font-size: 25px;
    line-height: 26px;
    margin-block: 20px;
  }
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 27px;

  display: flex;
  align-items: center;
  margin-block: 30px;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${Color.DarkGray};

  @media (max-width: ${Breakpoint.LG}px) {
    font-size: 20px;
    line-height: 21px;
  }

  @media (max-width: ${Breakpoint.MD}px) {
    font-size: 18px;
    line-height: 20px;
    margin-block: 20px;
  }
`;

const Total = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  display: flex;
  align-self: start;
  margin-block: 30px;
  letter-spacing: -0.3px;

  color: ${Color.Black};

  @media (max-width: ${Breakpoint.LG}px) {
    font-size: 20px;
    line-height: 21px;
  }

  @media (max-width: ${Breakpoint.MD}px) {
    font-size: 18px;
    line-height: 20px;
    margin-block: 20px;
  }
`;

export { StyledForm, Title, Description, Total };
