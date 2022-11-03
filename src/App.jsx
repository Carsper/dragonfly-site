import "./index.css";
import MiniContacts from "./components/MiniContacts";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Trip from "./components/Trip";
import Safety from "./components/satefy";

function App() {
  return (
    <div>
      <MiniContacts />
      <Navigation />
      <Hero />
      <Trip />
      <Clients />
      <Safety />
      <Footer />
    </div>
  );
}

export default App;
