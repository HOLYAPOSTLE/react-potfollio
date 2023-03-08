import Navbar from "./components/navbar"
import Home from "./components/home";
import './App.css';
import About from "./components/About";
import Crad from "./components/crad";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About />
      <Crad/>
      <Footer/>
    </div>
  );
}

export default App;
