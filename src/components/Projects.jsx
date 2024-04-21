import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useState } from "react"
import { projectsData } from './../constants/data';

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const [hoverKey, setHoverKey] = useState(false)

    useGSAP(() => {
        const section = gsap.utils.toArray(".section")

        gsap.to(section, {
            xPercent: -80 * (section.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".conatiner",
                pin: true,
                scrub: 1,
                end: "+=2000"
            }
        })
    }, [])

    const projects =  projectsData.map((item) => (
        <div key={item.key} className="ml-3 rounded-2xl p-3 section bg-[#1D1D1D] h-[70vh] w-[40vw] max-lg:w-[60vw] max-lg:h-[60vh] max-md:w-[80vw]">
            <div className="relative overflow-hidden rounded-2xl">
                <img 
                    src={item.image}
                    onMouseEnter={() => setHoverKey(item.key)}    
                />
                {hoverKey === item.key && <video 
                    className="absolute inset-0" src={item.video} 
                    autoPlay loop
                    onMouseLeave={() => setHoverKey(null)}
                />}
            </div>
            <div className="font-Neue text-2xl max-lg:text-lg font-semibold py-2">{item.title}</div>
            <div className="font-Neue text-[#B3B3B3] text-xl max-lg:text-base font-thin py-2">{item.desc}</div>
        </div>
    ))

  return (
    <div className="conatiner flex flex-col justify-evenly h-screen w-full overflow-x-hidden">
        <div className="font-Neue text-7xl font-bold max-md:text-5xl py-2 px-8">Projects</div>
        <div className="flex w-[1000vw] gap-10 p-5">
            {projects}
        </div>
    </div>
  )
}

export default Projects