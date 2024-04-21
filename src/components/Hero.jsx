import { useState } from "react"
import { useEffect } from "react"

const textEffect = (word, setText) => {
    setText(word)
    const intervalId = setInterval(() => {
        setText((prevText) => {
        const newText = prevText.map((char) => {
            if (char !== ' ') {
                return String.fromCharCode(65 + Math.floor(Math.random() * 52)) 
            }
                return char
            })
            return newText
        })
    }, 25)

    const timeoutId = setTimeout(() => {
        clearInterval(intervalId)
        setText(word)
    }, 2000)
    
    return () => {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
    }
}

const Hero = ({ setIsActive }) => {
    const firstText = "Full Stack Web Developer".split("")
    const [text, setText] = useState("")

    useEffect(() => {
        textEffect(firstText, setText)
    }, [])

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
        <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
            className="demo text-7xl max-sm:text-5xl font-Grotesk relative z-[52]"
        >
            Hello I am,
        </div>
        <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
            className="demo text-9xl max-sm:text-7xl font-Grotesk relative z-[52]"
        >
            Tabish Shaikh
        </div>
        <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
            className="text-7xl max-sm:text-5xl text-center font-Chakra font-thin my-4 relative z-[52]"
        >
            {text}
        </div>
    </div>
  )
}

export default Hero