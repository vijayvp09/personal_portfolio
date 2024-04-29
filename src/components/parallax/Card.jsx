import './card.scss'

export default function Card({color}) {
    return(
        <div className="container">
            <div className="card" style={{background: color}}>
                <p>demo paragraph lorem ipsum</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}