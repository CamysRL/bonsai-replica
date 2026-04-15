import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, About, Pricing } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
