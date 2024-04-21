import { useState } from "react"
import ContactMe from "./components/ContactMe"
import Github from "./components/Github"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Cursor from "./components/ui/Cursor"
import AboutMe from "./components/AboutMe"

const App = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-full bg-black bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:75px_75px]">
      <Cursor isActive={isActive}/>
      <Navbar />
      <Hero setIsActive={setIsActive}/>
      <AboutMe />
      <Projects />
      <Skills />
      <Github />
      <ContactMe />
    </div>
  )
}

export default App