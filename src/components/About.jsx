/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="sm:w-[250px] w-[220px]">
      <motion.div variants={fadeIn("right", "spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a full stack web developer with a passion for creating beautiful and functional web applications. I am a self-taught developer with a background in Mechanical Engineering. I am a quick learner and I am always looking for new challenges. I have experience working with JavaScript, React, Redux, Node, Express, SQL, Sequelize, PostgreSQL, HTML, CSS, Git, GitHub, Heroku, and Netlify.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")