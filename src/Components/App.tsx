import Container from "./Container";
import Navbar from "./Navbar";
import Score from "./Score";
import Option from "./Option";
import OptionsContainer from "./OptionsContainer";
import paperImage from "../images/icon-paper.svg";
import scissorsImage from "../images/icon-scissors.svg";
import rockImage from "../images/icon-rock.svg";
import RulesButton from "./RulesButton";

const optionsValues = [
  { source: paperImage, color: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)" },
  { source: scissorsImage, color: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)" },
  { source: rockImage, color: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)" },
];
const App = () => {
  return (
    <Container>
      <Navbar>
        <Score />
      </Navbar>
      <OptionsContainer>
        {optionsValues.map((option) => (
          <Option
            key={crypto.randomUUID()}
            source={option.source}
            color={option.color}
          />
        ))}
      </OptionsContainer>
      <RulesButton />
    </Container>
  );
};

export default App;
