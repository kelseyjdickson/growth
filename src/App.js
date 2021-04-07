import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Nav/>
   
      <Banner />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
