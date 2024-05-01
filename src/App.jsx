import './App.scss'
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/parallax/Card"
import data from "./data"
import { useRef } from "react"
import {useScroll, motion} from "framer-motion"

function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return<div>
    <section>
      <Navbar />
      <Hero />
    </section>    
    <section style={{height: `calc(${data.length} * 100vh)`}}> 
        <div ref={container} style={{background: 'linear-gradient(180deg, #111132, #0c0c1d, #111132)'}}>
          {data.map((item, i) => {
            const targetScale = 1 - ((data.length - i) * 0.05);
            return(
              <Card key={i} i={i} {...item} progress={scrollYProgress} targetScale={targetScale} range={[i * 0.25, 1]}/>
            )
          })}
        </div>
    </section>
    <section>services</section>    
    <section>parallax</section>    
    <section>portfolio1</section>       
  </div>
  
}

export default App
