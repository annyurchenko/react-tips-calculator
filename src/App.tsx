import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
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
  display: flex;
  justify-content: center;
  padding: 1% 15%;

  @media (max-width: ${Breakpoint.LG}) {
    padding: 1% 10%;
  }

  @media (max-width: ${Breakpoint.MD}) {
    padding: 1% 5%;
  }
`;
