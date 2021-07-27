import HomePage from "./pages/HomePage"
import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Rightbar from "./components/Rightbar";
import {Route, Switch} from "react-router-dom"
function App() {
  return (
    <Main>
     <GlobalStyles />

    <Switch>
      <Route path="/" exact>
<HomePage />
      </Route>

      <Route path="/info" exact>
 <Rightbar/>
      </Route>
     
    </Switch>
    

    </Main>
  );
}

const Main = styled.div`

`

export default App;
