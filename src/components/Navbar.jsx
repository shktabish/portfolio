import { useState } from "react"
import { motion } from 'framer-motion';
import { linksData } from "../constants/data";
import { Link } from "react-router-dom";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className="absolute top-0 right-0 overflow-hidden w-[100px] h-[40px] rounded-[25px]">
      <motion.div 
        className="relative w-full h-full"
        animate={{top: (isActive?"-100%":"0")}}
        transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
      >
        <div className="w-full h-full  bg-white text-black flex justify-center items-center font-Neue font-semibold cursor-pointer">Menu</div>
        <div className="absolute top-full w-full h-full bg-[#1D1D1D] flex justify-center items-center font-Neue font-semibold cursor-pointer">Close</div>
      </motion.div>
    </div>
  )
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const links = linksData.map((link, i) => (
    <div key={i} className="text-4xl text-black font-Neue font-semibold">
      <a href={link.href}>{link.name}</a>
    </div>
  ))

  const variant = {
    open: {
      width: 360,
      height: 500,
      top: "-25px",
      right: "-25px"
    },
    close: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px"
    }
  }

  return (
    <>
      <div className="absolute top-[50px] left-[100px] z-[51] text-5xl font-Grotesk">
        tabish<span className="text-blue-500">.</span>s
      </div>
      <div className="fixed top-[50px] right-[50px] z-[51]">
        <motion.div 
          className="relative rounded-[25px] bg-white"
          variants={variant}
          animate={isActive? "open" : "close"}
          initial="close"
          transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
        >
          <nav className="flex flex-col gap-4 pt-[100px] pl-[30px]">
            {isActive && links}
          </nav>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
    </>
  )
}

export default Navbar