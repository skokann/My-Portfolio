import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Wrapper } from "./Components/Wrapper";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Wrapper>
    </>
  );
}
export default App;
