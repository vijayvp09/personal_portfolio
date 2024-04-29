import './App.scss'
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/parallax/Card"
import data from "./data"
function App() {
  return<div>
    <section>
      <Navbar />
      <Hero />
    </section>    
    <section style={{height: `calc(${data.length} * 100vh)`}}>
      <div style={{background: 'linear-gradient(180deg, #111132, #7E2553)'}}>
        {data.map((item, i) => {
          return(
            <Card key={i} {...item}/>
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
