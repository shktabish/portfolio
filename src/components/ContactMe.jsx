import { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

const ContactMe = ({ setIsModalOpen }) => {
  const [whichHover, setWhichHover] = useState("");

  return (
    <div id="contactme" className="w-full h-screen">
      <div className="flex flex-col justify-center gap-[10vh] h-full px-8 relative">
        <div>
          <div className="font-Neue w-[70%] max-md:w-full text-6xl font-bold max-md:text-5xl py-2">
            Do you have a question, an idea, or a project you need help with?
          </div>
          <div className="font-Neue w-[70%] text-6xl font-bold max-md:text-5xl py-2">
            Contact Me!
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-wrap gap-3 mb-5">
            <a href="mailto:shktab1sh93@gmail.com"
              style={{ border: "1px solid white", transition: "all 0.25s ease-in-out" }}
              className="rounded-full py-2 px-8 hover:bg-white hover:text-black font-semibold"
            >
              shktab1sh93@gmail.com
            </a>
            <div
              style={{ border: "1px solid white", transition: "all 0.25s ease-in-out" }}
              className="rounded-full py-2 px-8 hover:bg-white hover:text-black font-semibold"
            >
              +91 9321744986
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/tabish-shaikh-5b997128b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "1px solid white", transition: "all 0.25s ease-in-out" }}
              className="rounded-full py-4 px-16 hover:bg-white"
              onMouseEnter={() => setWhichHover("linkedin")}
              onMouseLeave={() => setWhichHover("")}
            >
              <FaLinkedin
                className="scale-[1.5]"
                fill={whichHover === "linkedin" ? "black" : "white"}
                style={{ transition: "fill 0.25s ease-in-out" }}
              />
            </a>
            <a
              href="https://github.com/shktabish/Spotify"
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "1px solid white", transition: "all 0.25s ease-in-out" }}
              className="rounded-full py-4 px-16 hover:bg-white"
              onMouseEnter={() => setWhichHover("github")}
              onMouseLeave={() => setWhichHover("")}
            >
              <RiGithubFill
                fill={whichHover === "github" ? "black" : "white"}
                className="scale-[1.5]"
                style={{ transition: "fill 0.25s ease-in-out" }}
              />
            </a>
            <a
              href="https://www.instagram.com/shk_tabish_/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "1px solid white", transition: "all 0.25s ease-in-out" }}
              className="rounded-full py-4 px-16 hover:bg-white"
              onMouseEnter={() => setWhichHover("instagram")}
              onMouseLeave={() => setWhichHover("")}
            >
              <FaInstagram
                fill={whichHover === "instagram" ? "black" : "white"}
                className="scale-[1.5]"
                style={{ transition: "fill 0.25s ease-in-out" }}
              />
            </a>
          </div>
          <div onClick={() => setIsModalOpen(true)} className="absolute bottom-0 max-md:static right-0 mb-10 mr-5 bg-500">
            <img src="rotator.svg" alt="" className="w-52 h-52 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
