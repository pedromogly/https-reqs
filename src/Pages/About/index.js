import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <h1>Sobre nós</h1>
            <Link to="/" className='butaum'>HOME</Link>
            <Link to="/macaco" className='butaum'>Macacos</Link>
        </div>
    )
}

export default About;