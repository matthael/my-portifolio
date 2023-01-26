import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
    </div>
  );
}

export default App;
