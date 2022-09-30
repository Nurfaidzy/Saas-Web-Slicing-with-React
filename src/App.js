import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Stage1 from "./Components/Stage1";
import Stage2 from "./Components/Stage2";
import Stage3 from "./Components/Stage3";
import Stage4 from "./Components/Stage4";
import Stage5 from "./Components/Stage5";
import Stage6 from "./Components/Stage6";

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Stage1 />
      <Stage2 />
      <Stage3 />
      <Stage4 />
      <Stage5 />
      <Stage6 />
      <Footer />
    </div>
  );
}

export default App;
