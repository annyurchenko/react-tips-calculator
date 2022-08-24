import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { Color } from "./styles/colors";
import circles from "./assets/circles.svg";
import { Form } from "./components/Form/Form";
import { Breakpoint } from "./styles/breakpoints";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1% 15%;
  background: no-repeat url(${circles}) ${Color.LightGray};

  @media (max-width: ${Breakpoint.LG}) {
    padding: 1% 10%;
  }

  @media (max-width: ${Breakpoint.MD}) {
    padding: 1% 5%;
  }
`;
