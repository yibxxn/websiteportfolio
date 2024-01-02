import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => { 
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
      >
        Hello there! 👋 I'm a passionate Computer Science student 
        who is currently navigating the exciting world of web development on the side.
         My academic pursuits provide a solid foundation, while my hands-on experience in crafting web solutions adds a dynamic layer to my skills. 
         Eager to explore the intersections of theory and practical application, I'm always on the lookout for new challenges and opportunities 
         to enhance my understanding of the digital realm. Join me on this journey as I delve into the realms of coding, design, and everything in between! 🚀💻 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About