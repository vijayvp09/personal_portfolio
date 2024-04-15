import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="wrapper">
                <motion.span initial={{x:-300, opacity:0}} animate={{opacity:1, x:0}} transition={{duration:.5}}>Vijay V Pillai</motion.span>
                <div className="social">
                    <a href="#"><img src="/linkedin.png" alt="" /></a>
                    <a href="#"><img src="/github.png" alt="" /></a>
                    <a href="#"><img src="/twitter.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;