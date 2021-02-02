import "./App.css";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>I am app</h1>
      <Nav />
      <Banner />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
