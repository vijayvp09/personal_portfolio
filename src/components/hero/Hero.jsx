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
        
    },
    scrollButtonAnimate: {
        y: 10,
         
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
}

const scrollingTextVariant = {
    initial: {
        x: "50%",
    },
    animate: {
        x: "-100%",
        transition: {
            duration: 10,
            repeat: Infinity,
        }
    }
}
const imageVariant = {
    initial: {
        y: -10,
    },
    animate: {
        y: 5,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
}
const Hero = () => {
    return(
        <div className="hero" > 
            <motion.span className="menu" initial={{x:'150%', opacity:0}} animate={{opacity:1, x:0}} transition={{duration: 1.5, damping: 15, stiffness: 500, type: 'spring'}}>
                    <div className="images">
                        <a href="#Home" ><img src="/home.png" /></a>
                        <a href="#Projects"><img src="/cook.png" /></a>
                        <a href="#Contact"><img src="/phonecall.png" /></a>
                    </div>
            </motion.span>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>VIJAY V PILLAI</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <a href="#Projects"><motion.button className="button1" variants={textVariants}> See The Latest Works</motion.button></a>
                        <a href="#Contact"><motion.button variants={textVariants}>Contact Me</motion.button></a>
                    </motion.div >
                    <motion.img className="cursor" src="/mouseCursor.png" alt="" variants={textVariants} initial="scrollButtonInitial" animate="scrollButtonAnimate"/>
                </motion.div>
            </div>
            <motion.div className="scrollingText" variants={scrollingTextVariant} initial="initial" animate="animate">
                Aspiring Web Developer
            </motion.div>
            <motion.div className="imageContainer" variants={imageVariant}>
                <motion.img src="/developer.png" loading="lazy" alt="" variants= {imageVariant} initial="initial" animate="animate"/>
            </motion.div>
        </div>
    )
}

export default Hero;