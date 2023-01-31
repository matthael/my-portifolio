import "bootstrap/dist/css/bootstrap.min.css";

import { NavigationBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
