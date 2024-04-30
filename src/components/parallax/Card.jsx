import './card.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'



export default function Card({i, color, src, link, details, title, progress, range, targetScale}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]); 

    return(
        <div ref={container} className="container">
            <motion.div className="card" style={{scale: scale ,background: color, marginTop: `calc(-5% + ${i * 55}px)`}}>
                <h2>{title}</h2>
                <div className="content">
                    <p>
                        {details}
                        <img src="/github.png" alt="" />
                    </p>
                    <motion.a  href={link} ><motion.img animate={{transition:{duration: 2}}} style={{scale: imageScale}} src={src} alt="" /></motion.a>
                </div>
            </motion.div>
        </div>
    )
}