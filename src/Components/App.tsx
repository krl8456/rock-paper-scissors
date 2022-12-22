import Container from "./Container";
import Navbar from "./Navbar";
import Score from "./Score";
import Title from "./Title";
const App = () => {
  return (
    <Container>
      <Navbar>
        <Title />
        <Score />
      </Navbar>
    </Container>
  );
};

export default App;
