import "./App.css";
import IntroSection from "./intro-section";
import MainSection from "./main-section";

function App() {
  return (
    <div className="App">
      <IntroSection />
      <div
        style={{ backgroundColor: "black", height: "500px", width: "100%" }}
      ></div>
      <MainSection />
    </div>
  );
}

export default App;
