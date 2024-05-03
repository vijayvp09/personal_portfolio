import './App.scss'
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/parallax/Card"
import data from "./data"
import { useRef } from "react"
import { useScroll } from "framer-motion"
import Contact  from './components/contact/Contact'

function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return<div>
    <section id="Home">
      <Navbar />
      <Hero />
    </section>    
    <section id="Projects" style={{height: `calc(${data.length} * 100vh)`}}> 
        <div ref={container} style={{background: 'linear-gradient(180deg, #111132, #111132, #0c0c1d)'}}>
          {data.map((item, i) => {
            const targetScale = 1 - ((data.length - i) * 0.05);
            return(
              <Card key={i} i={i} {...item} progress={scrollYProgress} targetScale={targetScale} range={[i * 0.25, 1]}/>
            )
          })}
        </div>
    </section>
    <section id="Contact"><Contact /></section>         
  </div>
  
}

export default App