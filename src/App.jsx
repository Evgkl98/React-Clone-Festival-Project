import "./index.css";
import Header from "./Components/Header";
import FestivalName from "./Components/FestivalName";
import Content from "./Components/Content";
import KampusDejvice from "./Components/KampusDejvice";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <FestivalName />
        <Content />
        <KampusDejvice></KampusDejvice>
      </MainContainer>
    </>
  );
}

export default App;
