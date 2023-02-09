import "bootstrap/dist/css/bootstrap.min.css";

import { NavigationBar } from "./components/layout/Navbar";
import { Banner } from "./components/sections/Banner";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
