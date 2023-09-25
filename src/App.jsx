import { About } from "./Components/About"
import { Certifications } from "./Components/Certifications"
import { Contact } from "./Components/Contact"
import { Home } from "./Components/Home"
import { NavBar } from "./Components/NavBar"
import { Proyects } from "./Components/Proyects"
import { Services } from "./Components/Services"

function App() {
   return (
    <>
      <NavBar />
      <Home />
      <About />
      <Proyects />
      <Certifications />
      <Services />
      <Contact />
    </>
  )
}

export default App
