import { Toaster } from "react-hot-toast";

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Preloader from "./Preloader";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Preloader />
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
