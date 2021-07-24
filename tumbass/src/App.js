import HomePage from "./pages/HomePage"
import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <Main>
     <GlobalStyles />
     <HomePage />
    </Main>
  );
}

const Main = styled.div`

`

export default App;
