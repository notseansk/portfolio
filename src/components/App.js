import { Toaster } from "react-hot-toast";
import "../styles/App.css";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technologies from "./Technologies";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
