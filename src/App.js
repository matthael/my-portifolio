import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
