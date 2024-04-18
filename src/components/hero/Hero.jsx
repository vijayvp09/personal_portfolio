import "./hero.scss"
const Hero = () => {
    return(
        <div className="hero"> 
            <div className="wrapper">
                <div className="textContainer">
                    <h2>VIJAY V PILLAI</h2>
                    <h1>Web Developer</h1>
                    <div className="buttons">
                        <button className="button1">See The Latest Works</button>
                        <button>Contact Me</button>
                    </div>
                    <img src="/mouseCursor.png" alt="" />
                </div>
                <div className="imageContainer">
                    <img src="/developer.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;