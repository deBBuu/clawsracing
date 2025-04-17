import {Box, styled} from "@mui/material";
import Navbar from "./pages/Navbar.tsx";
import SecondBar from "./pages/SecondBar.tsx";

function App() {

  return (
      <Wrapper>
          <Navbar />
          <SecondBar />
      </Wrapper>
  )
}

export default App

const Wrapper = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

`
