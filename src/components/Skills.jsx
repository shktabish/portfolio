import { useState } from "react";
import { skillsData } from "../constants/data"
import { motion } from 'framer-motion';

const Skills = () => {
  const [isActiveKey, setIsActiveKey] = useState(null)

  const skills = skillsData.map((item, i) => (
    <div 
      key={i} 
      className="relative"
      onMouseEnter={() => setIsActiveKey(i)} 
      onMouseLeave={() => setIsActiveKey(null)}
    >
      <motion.div 
        className="bg-white rounded-full overflow-hidden flex flex-col justify-center items-center h-24 w-24 max-lg:w-20 max-lg:h-20 max-md:w-15 max-md:h-15 my-10 mx-16"
        drag
        dragConstraints={{top: 0, bottom:0, left:0, right:0}}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        whileHover={{scale: 1.1}}
      >
        <img src={item.image} draggable="false" />
      </motion.div>

      <div className="m-auto -mt-4 overflow-hidden">
        <motion.div 
          className="relative w-full h-full"
          animate={{top: (isActiveKey === i?"-100%":"0")}}
          transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
        >
          <div className="w-full h-full text-2xl text-white flex justify-center items-center font-Neue font-semibold cursor-pointer">{item.title}</div>
          <div className="absolute top-full w-full h-full text-2xl text-[#757171] flex justify-center items-center font-Neue font-semibold cursor-pointer">{item.title}</div>
        </motion.div>
      </div>

    </div>
  ))

  return (
    <div id="skills" className="min-h-screen w-full flex flex-col justify-around">
      <div className="font-Neue text-7xl font-bold max-md:text-5xl py-2 px-8">Skills</div>
      <div className="flex justify-center items-center flex-wrap mb-8">
        {skills}
      </div>
    </div>
  )
}

export default Skills

