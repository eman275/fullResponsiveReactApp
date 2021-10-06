import styled  from "styled-components";
import Navbar from "./components/Navbar";
import  Intro  from "./components/Intro";



const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IntoShape=styled.div`
width: 100%;
height: 100%;
top: 0;
position: absolute;
z-index: -1;
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`


const App = () => {
  
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
     
    </>
  );
};

export default App;
