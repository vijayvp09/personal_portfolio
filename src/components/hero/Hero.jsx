import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        opacity: 0,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: .1,
        },
    },
    scrollButtonInitial: {
        y: -10,
        opacity: 1,
    },
    scrollButtonAnimate: {
        y: 10,
        opacity: 0, 
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const scrollingTextVariant = {
    initial: {
        x: "25%",
    },
    animate: {
        x: "-100%",
        transition: {
            duration: 20,
            repeat: Infinity,
        }
    }
}
const Hero = () => {
    return(
        <div className="hero"> 
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>VIJAY V PILLAI</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button className="button1" variants={textVariants}>See The Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div >
                    <motion.img src="/mouseCursor.png" alt="" variants={textVariants} initial="scrollButtonInitial" animate="scrollButtonAnimate"/>
                </motion.div>
            </div>
            <motion.div className="scrollingText" variants={scrollingTextVariant} initial="initial" animate="animate">
                Still Exploring New Technologies
            </motion.div>
            <div className="imageContainer">
                <img src="/developer.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;