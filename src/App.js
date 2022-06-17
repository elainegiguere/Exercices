import StarIcon from "./images/icon-star.svg";

import Container from "./components/Container";
import Star from "./components/Star";
import Text from "./components/Text";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";









function App() {
  return (
    <div className="App">
      <Container>
        <Star src={StarIcon} alt="star"/>
        <Text as={"h1"}>How did we do?</Text>
        <Text as={"p"}>Please let us know how we did with our support request. All feedback is appreciated to help us improve our offering!</Text>
        <ButtonContainer>
        <Button round={true} placement={true}>1</Button>
        <Button round={true} placement={true}>2</Button>
        <Button round={true} placement={true}>3</Button>
        <Button round={true} placement={true}>4</Button>
        <Button round={true} placement={true}>5</Button>
        </ButtonContainer>
        <Button additionalClasses="submit">sumbit</Button>
      </Container>
    </div>
  );
}

export default App;
