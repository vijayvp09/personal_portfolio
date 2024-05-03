import './navbar.scss'
import { motion } from 'framer-motion'
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="social">
                    <a href="https://www.linkedin.com/in/vijay-v-pillai-b44b392a1/"><img src="/linkedin.png" alt="" /></a>
                    <a href="https://github.com/vijayvp09"><img src="/github.png" alt="" /></a>
                    <a href="https://twitter.com/VIJAY_V_P"><img src="/twitter.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;