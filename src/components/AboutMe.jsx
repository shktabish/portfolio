import { useGSAP } from "@gsap/react"
import { aboutMe } from "../constants/data"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  useGSAP(() => {
    gsap.from('.text', {
      x: -1000,
      opacity: 0,
      scrollTrigger: {
        trigger: '.container',
        start: "top bottom",
        end: "top top",
        scrub: true
      } 
    })

    gsap.from('.image', {
      x: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: '.container',
        start: "top bottom",
        end: "top top",
        scrub: true
      } 
    })
  }, [])

  const about = aboutMe.map((item, i) => (
    <div key={i} className="my-8 mx-5 text-xl max-lg:text-base font-Neue">
      {item.point}
    </div>
  ))

  return (
    <div id="aboutme" className="container w-screen">
      <div className="font-Neue text-6xl w-full font-bold max-md:text-5xl py-2 px-8 items-start">
        About Me
      </div>
        <div className="w-screen">
        <div className="flex justify-evenly w-full items-center p-4 max-md:flex-col">
          <div className="text w-[50vw] max-md:w-full">
            {about}
          </div>
          <div className="image relative z-0 w-80 h-80 max-lg:w-72 max-lg:h-72 flex flex-col items-center">
            <img src="/myPicture.jpg" alt="my photo" />
            <div className="w-80 h-80 max-lg:w-72 max-lg:h-72 absolute top-5 left-5 -z-10 bg-[white]"></div>
            <a target="_blank" href="tabish_resume.pdf" className="text-black font-Neue font-semibold bg-white rounded-md cursor-pointer mt-10 px-4 py-2 w-max ">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe