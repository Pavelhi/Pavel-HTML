import logo from "./logo.svg";
import './App.css';
import Menu from "./Menu.jsx"
import Social from "./Social.jsx"
import About from "./About.jsx"
import Designers from "./Designers.jsx"
import Header from "./Header.jsx"
import Advantages from "./Advantages.jsx"
import Photo from "./Photo.jsx"
import Showcase from "./Showcase.jsx";

function App() {
  return (
  
    <div className="menu">
    <Menu/>

      <Social/>

      <Header/>

      <Advantages/>

      <Photo/>

      <Showcase/>

      <Designers/>

      <About/>
    </div>
  );
}

export default App;
